import ApiError from "../utils/errorApi.js";

class TreatmentService {
  /**
   *
   * @param {import('../repositories/treatment.repository.js').default} treatmentRepository
   */
  constructor(treatmentRepository) {
    this.treatmentRepository = treatmentRepository;
  }

  validateAndGetTreatment = async (id) => {
    const treatment = await this.treatmentRepository.getById(id);

    if (!treatment) {
      throw new ApiError(404, "Treatment no encontrado");
    }

    return treatment;
  };

  listTreatments = async () => {
    return this.treatmentRepository.getAll();
  };

  createTreatment = async (treatment) => {
    return this.treatmentRepository.create(treatment);
  };

  getTreatment = async (id) => {
    return this.validateAndGetTreatment(id);
  };

  updateTreatment = async (id, newTreatment) => {
    await this.validateAndGetTreatment(id);

    return this.treatmentRepository.update(id, newTreatment);
  };

  deleteTreatment = async (id) => {
    await this.validateAndGetTreatment(id);

    return this.treatmentRepository.delete(id);
  };
}

export default TreatmentService;
