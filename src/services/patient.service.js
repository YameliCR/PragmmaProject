import ApiError from "../utils/errorApi.js";

class PatientService {
  /**
   *
   * @param {import('../repositories/patient.repository.js').default} patientRepository
   */
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  validateAndGetPatient = async (id) => {
    const patient = await this.patientRepository.getById(id);

    if (!patient) {
      throw new ApiError(404, "Patient no encontrado");
    }

    return patient;
  };

  listPatients = async () => {
    return this.patientRepository.getAll();
  };

  createPatient = async (patient) => {
    return this.patientRepository.create(patient);
  };

  getPatient = async (id) => {
    return this.validateAndGetPatient(id);
  };

  updatePatient = async (id, newPatient) => {
    await this.validateAndGetPatient(id);

    return this.patientRepository.update(id, newPatient);
  };

  deletePatient = async (id) => {
    await this.validateAndGetPatient(id);

    return this.patientRepository.delete(id);
  };
}

export default PatientService;
