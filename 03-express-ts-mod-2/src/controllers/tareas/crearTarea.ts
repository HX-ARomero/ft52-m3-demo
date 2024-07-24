import { Request, Response } from "express";
import ITarea from "../../intertaces/ITarea";
import { tareas } from "../../utils/tareas";

let tareaId: number = 10;

const crearTarea = (
  req: Request<{}, {}, ITarea>,
  res: Response
): void => {
  const { actividad, prioridad } = req.body;
  if (!actividad || !prioridad) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }
  const nuevaTarea: ITarea = {
    id: tareaId++,
    actividad,
    prioridad,
  };
  tareas.push(nuevaTarea);

  res.status(201).json(tareas);
};

export default crearTarea;