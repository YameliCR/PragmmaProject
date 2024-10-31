import UserRepository from "../repositories/user.repository.js";
import TokenService from "../services/token.service.js";
import BcryptAdapter from "../adapters/bcrypt.adapter.js";
import AuthService from "../services/auth.service.js";
import AuthController from "../controllers/auth.controller.js";
import CustomContainer from "../utils/customContainer.js";
import config from "../utils/config.js";
import { OAuth2Client } from "google-auth-library";

const container = CustomContainer.getInstance();

// Auth
const oAuth2ClientInstance = new OAuth2Client(
  config.google.clientId,
  config.google.clientSecret,
  "postmessage"
);
container.addClass("OAuth2Client", oAuth2ClientInstance);
container.addClass(UserRepository.name, UserRepository, []);
container.addClass(TokenService.name, TokenService, []);
container.addClass(BcryptAdapter.name, BcryptAdapter, []);
container.addClass(AuthService.name, AuthService, [
  UserRepository.name,
  TokenService.name,
  BcryptAdapter.name,
]);
container.addClass(AuthController.name, AuthController, [AuthService.name]);
