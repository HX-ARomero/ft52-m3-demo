import { Request, Response } from "express";
import ITarea from "../intertaces/ITarea";
import { tareas } from "../utils/tareas";

let tareaId: number = 10;

export const crearTarea = (
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

export const obtenerTarea = (req: Request, res: Response): void => {
  res.json(tareas);
};

export const modificarTarea = (
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

export const borrarTarea = (
  req: Request<{ id: string }>,
  res: Response
): void => {
  const tareaId = Number(req.params.id);

  const indice = tareas.findIndex((tarea) => tarea.id === tareaId);

  if (indice === -1) {
    res.status(400).json({ message: "Tarea no encontrada" });
    return;
  }

  const tareaEliminada = tareas.splice(indice, 1)[0]; //* [ {tarea} ]

  res.json({
    actividad: tareaEliminada.actividad,
    message: "Tarea eliminada",
  });
};
