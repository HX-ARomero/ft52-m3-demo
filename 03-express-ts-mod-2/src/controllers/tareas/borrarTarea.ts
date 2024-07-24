import { Request, Response } from "express";
import { tareas } from "../../utils/tareas";

const borrarTarea = (
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

export default borrarTarea;