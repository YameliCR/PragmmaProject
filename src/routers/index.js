import express from "express";
import ownerRouter from "./owner.router.js";
import patientRouter from "./patient.router.js";
import treatmentRouter from "./treatment.router.js";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";

const appRouter = express.Router();

appRouter.use(ownerRouter);
appRouter.use(patientRouter);
appRouter.use(treatmentRouter);
appRouter.use(userRouter);
appRouter.use(authRouter);

export default appRouter;
