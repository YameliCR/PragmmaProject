import express from "express";
import OwnerController from "../controllers/owner.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import CustomContainer from "../utils/customContainer.js";
import { validate } from "../middlewares/validate.middleware.js";
import { ownerValidation } from "../validations/owner.validation.js";

const container = CustomContainer.getInstance();
const ownerController = container.get(OwnerController.name);

const ownerRouter = express.Router();
ownerRouter
  .route("/owners")
  .get(authenticate, ownerController.listOwners)
  .post([authenticate, validate(ownerValidation)], ownerController.createOwner);

ownerRouter
  .route("/owners/:id")
  .get(authenticate, ownerController.getOwner)
  .patch([authenticate, validate(ownerValidation)], ownerController.updateOwner)
  .delete(authenticate, ownerController.deleteOwner);

export default ownerRouter;
