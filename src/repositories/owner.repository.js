import Owner from "../models/owner.model.js";
import BaseRepository from "./repository.js";

class OwnerRepository extends BaseRepository {
  constructor() {
    super(Owner);
  }

  async getByIdWithPatients(id) {
    return this.model.findByPk(id, { include: "patients" });
  }

  async getOneByEmail(email) {
    return this.model.findOne({ where: { email } });
  }
}

export default OwnerRepository;
