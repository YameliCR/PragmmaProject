import { body } from "express-validator";

export const treatmentValidation = [
  body("description").notEmpty().withMessage("Descripción requerido"),
  body("price")
    .notEmpty()
    .isDecimal()
    .withMessage("Precio requerido  y debe ser un número"),
  body("patient_id").notEmpty().withMessage("Paciente requerido"),
];
