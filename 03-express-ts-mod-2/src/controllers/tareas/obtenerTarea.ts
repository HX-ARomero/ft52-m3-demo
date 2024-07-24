import { Request, Response } from "express";
import { tareas } from "../../utils/tareas";

const obtenerTarea = (req: Request, res: Response): void => {
  res.send(200).json(tareas);
};

export default obtenerTarea;
