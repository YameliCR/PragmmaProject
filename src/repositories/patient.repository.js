import Patient from "../models/patient.model.js";
import BaseRepository from "./repository.js";

class PatientRepository extends BaseRepository {
  constructor() {
    super(Patient);
  }
}

export default PatientRepository;
