import express from "express";
import PatientController from "../controllers/patient.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import CustomContainer from "../utils/customContainer.js";
import { patientValidation } from "../validations/patient.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const container = CustomContainer.getInstance();
const patientController = container.get(PatientController.name);

const patientRouter = express.Router();
patientRouter
  .route("/patients")
  .get(authenticate, patientController.listPatients)
  .post(
    [authenticate, validate(patientValidation)],
    patientController.createPatient
  );

patientRouter
  .route("/patients/:id")
  .get(authenticate, patientController.getPatient)
  .patch(
    [authenticate, validate(patientValidation)],
    patientController.updatePatient
  )
  .delete(authenticate, patientController.deletePatient);

export default patientRouter;
