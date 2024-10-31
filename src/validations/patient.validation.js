import { body } from "express-validator";

export const patientValidation = [
  body("type").notEmpty().withMessage("Tipo requerido"),
  body("owner_id").notEmpty().withMessage("Owner requerido"),
  body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .isLength({ min: 1 })
    .withMessage("El nombre debe tener al menos 1 caracteres"),
];
