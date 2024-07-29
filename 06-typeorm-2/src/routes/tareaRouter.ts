import { Router } from "express";
import autenticacion from "../middlewares/autenticacionMiddleware";
import { borrarTarea, crearTarea, modificarTarea, obtenerTarea } from "../controllers/tareaController";


const tareaRouter = Router();

tareaRouter.post("/", crearTarea);

tareaRouter.get("/", autenticacion, obtenerTarea);

tareaRouter.put("/:id", modificarTarea);

tareaRouter.delete("/:id", borrarTarea);

export default tareaRouter;
