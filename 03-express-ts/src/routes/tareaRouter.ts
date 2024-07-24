import { Request, Response, Router } from "express";
import autenticacion from "../middlewares/autenticacionMiddleware";

const tareaRouter = Router();

interface ITarea {
  id?: number;
  actividad: string;
  prioridad: number;
}
const tareas: ITarea[] = [
  {
    id: 1,
    actividad: "Repasar Express",
    prioridad: 9,
  },
  {
    id: 2,
    actividad: "Practicar TS",
    prioridad: 9,
  },
];
let tareaId: number = 10;

tareaRouter.post("/", (req: Request<{}, {}, ITarea>, res: Response): void => {
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
});

tareaRouter.get("/", autenticacion, (req: Request, res: Response): void => {
  res.json(tareas);
});

//* GET /tareas/1
tareaRouter.put(
  "/:id",
  (req: Request<{ id: string }, {}, Partial<ITarea>>, res: Response): void => {
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
  }
);

tareaRouter.delete(
  "/:id",
  (req: Request<{ id: string }>, res: Response): void => {
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
  }
);

export default tareaRouter;
