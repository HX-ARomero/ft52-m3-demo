import { Router } from "express";
import tareaRouter from "./tareaRouter";

const indexRouter = Router();

indexRouter.use("/tareas", tareaRouter);
// indexRouter.use("/users", userRouter);

export default indexRouter;