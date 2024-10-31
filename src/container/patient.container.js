import PatientController from "../controllers/patient.controller.js";
import PatientRepository from "../repositories/patient.repository.js";
import PatientService from "../services/patient.service.js";
import CustomContainer from "../utils/customContainer.js";

const container = CustomContainer.getInstance();

// Patient
container.addClass(PatientRepository.name, PatientRepository, []);
container.addClass(PatientService.name, PatientService, [
  PatientRepository.name,
]);
container.addClass(PatientController.name, PatientController, [
  PatientService.name,
]);
