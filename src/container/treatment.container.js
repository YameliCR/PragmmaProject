import TreatmentController from "../controllers/treatment.controller.js";
import TreatmentRepository from "../repositories/treatment.repository.js";
import TreatmentService from "../services/treatment.service.js";
import CustomContainer from "../utils/customContainer.js";

const container = CustomContainer.getInstance();

// Treatment
container.addClass(TreatmentRepository.name, TreatmentRepository, []);
container.addClass(TreatmentService.name, TreatmentService, [
  TreatmentRepository.name,
]);
container.addClass(TreatmentController.name, TreatmentController, [
  TreatmentService.name,
]);
