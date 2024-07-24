import { Request, Response } from "express";
import ITarea from "../../intertaces/ITarea";
import { tareas } from "../../utils/tareas";

const modificarTarea = (
  req: Request<{ id: string }, {}, Partial<ITarea>>,
  res: Response
): void => {
  const { id } = req.params;
  const { actividad, prioridad } = req.body;

  if (!actividad && !prioridad) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }
  const tareaEncontrada = tareas.find((tarea) => tarea.id === Number(id));

  if (!tareaEncontrada) {
    res.status(400).json({ message: "Tarea no encontrada" });
    return;
  }
  if (actividad) {
    tareaEncontrada.actividad = actividad;
  }
  if (prioridad) {
    tareaEncontrada.prioridad = prioridad;
  }

  res.json(tareaEncontrada);
};

export default modificarTarea;