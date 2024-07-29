import { Router } from "express";
import tareaRouter from "./tareaRouter";
import videogameRouter from "./videogameRouter";
import platformRouter from "./platformRouter";
import genreRouter from "./genreRouter";

const indexRouter = Router();

indexRouter.use("/tareas", tareaRouter);
indexRouter.use("/videogames", videogameRouter);
indexRouter.use("/platforms", platformRouter);
indexRouter.use("/genres", genreRouter);

export default indexRouter;
