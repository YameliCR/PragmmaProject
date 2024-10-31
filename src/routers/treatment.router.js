import express from "express";
import TreatmentController from "../controllers/treatment.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import CustomContainer from "../utils/customContainer.js";
import { treatmentValidation } from "../validations/treatment.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const container = CustomContainer.getInstance();
const treatmentController = container.get(TreatmentController.name);

const treatmentRouter = express.Router();
treatmentRouter
  .route("/treatments")
  .get(/* authenticate, */ treatmentController.listTreatments)
  .post(validate(treatmentValidation), treatmentController.createTreatment);

treatmentRouter
  .route("/treatments/:id")
  .get(treatmentController.getTreatment)
  .patch(validate(treatmentValidation), treatmentController.updateTreatment)
  .delete(treatmentController.deleteTreatment);

export default treatmentRouter;
