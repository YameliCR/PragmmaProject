import ApiError from "../utils/errorApi.js";

class AuthService {
  /**
   *
   * @param {import('../repositories/user.repository.js').default} userRepository
   * @param {import('../services/token.service.js').default} tokenService
   * @param {import('../adapters/bcrypt.adapter.js').default} encryptionAdapter
   * @param {import('google-auth-library').OAuth2Client} oAuth2Client
   */
  constructor(userRepository, tokenService, encryptionAdapter, oAuth2Client) {
    this.userRepository = userRepository;
    this.oAuth2Client = oAuth2Client;
    this.tokenService = tokenService;
    this.encryptionAdapter = encryptionAdapter;
  }

  signup = async (userBody) => {
    const { email, password, confirmPassword } = userBody;

    const existedUser = await this.userRepository.getOneByEmail(email);

    if (existedUser) {
      throw new ApiError(400, "El correo ya esta en uso");
    }

    if (password !== confirmPassword) {
      throw new ApiError(400, "Las contraseñas no coinciden");
    }

    const hashedPassword = await this.encryptionAdapter.hashPassword(password);

    await this.userRepository.create({ email, password: hashedPassword });
  };

  validateUserByEmail = async (email) => {
    const existedUser = await this.userRepository.getOneByEmail(email);

    if (!existedUser) {
      throw new ApiError(404, "Credeciales incorrectas");
    }

    return existedUser;
  };

  validatePassword = async (password, hashedPassword) => {
    const passwordMatch = await this.encryptionAdapter.comparePassword(
      password,
      hashedPassword
    );

    if (!passwordMatch) {
      throw new ApiError(404, "Credeciales incorrectas");
    }
  };

  login = async (authBody) => {
    const { email, password } = authBody;

    const existedUser = await this.validateUserByEmail(email);

    const hashedPassword = existedUser.password;
    await this.validatePassword(password, hashedPassword);

    const tokens = this.tokenService.generateAuthTokens(existedUser);

    return tokens;
  };
}

export default AuthService;
