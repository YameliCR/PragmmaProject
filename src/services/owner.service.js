import e from "cors";
import ApiError from "../utils/errorApi.js";

class OwnerService {
  /**
   *
   * @param {import('../repositories/owner.repository.js').default} ownerRepository
   */
  constructor(ownerRepository) {
    this.ownerRepository = ownerRepository;
  }

  validateAndGetOwner = async (id, withPatient = false) => {
    let owner;

    if (withPatient) {
      owner = await this.ownerRepository.getByIdWithPatients(id);
    } else {
      owner = await this.ownerRepository.getById(id);
    }

    if (!owner) {
      throw new ApiError(404, "Owner no encontrado");
    }

    return owner;
  };

  listOwners = async () => {
    return this.ownerRepository.getAll();
  };

  createOwner = async (owner) => {
    const existedUser = await this.ownerRepository.getOneByEmail(owner.email);

    if (existedUser) {
      throw new ApiError(400, "El correo ya esta en uso");
    }

    return this.ownerRepository.create(owner);
  };

  getOwner = async (id) => {
    return this.validateAndGetOwner(id, true);
  };

  updateOwner = async (id, newOwner) => {
    await this.validateAndGetOwner(id);

    return this.ownerRepository.update(id, newOwner);
  };

  deleteOwner = async (id) => {
    await this.validateAndGetOwner(id);

    return this.ownerRepository.delete(id);
  };
}

export default OwnerService;
