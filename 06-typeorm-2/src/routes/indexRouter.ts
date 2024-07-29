import { Router } from "express";
import tareaRouter from "./tareaRouter";
import videogameRouter from "./videogameRouter";
import platformRouter from "./platformRouter";
import genreRouter from "./genreRouter";
import characterRouter from "./characterRouter";

const indexRouter = Router();

indexRouter.use("/tareas", tareaRouter);
indexRouter.use("/videogames", videogameRouter);
indexRouter.use("/platforms", platformRouter);
indexRouter.use("/genres", genreRouter);
indexRouter.use("/characters", characterRouter);

export default indexRouter;
