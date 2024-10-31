import { body } from "express-validator";

export const ownerValidation = [
  body("email")
    .notEmpty()
    .withMessage("Correo requerido")
    .isEmail()
    .withMessage("Correo inválido"),
  body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .isLength({ min: 1 })
    .withMessage("El nombre debe tener al menos 1 caracteres"),
];
