import { Router } from "express";
import {
  addVideogame,
  deleteVideogame,
  getVideogames,
  updateVideogame,
} from "../controllers/videogameController";

const videogamesRouter = Router();

videogamesRouter.post("/", addVideogame);
videogamesRouter.get("/", getVideogames);
videogamesRouter.put("/:id", updateVideogame);
videogamesRouter.delete("/:id", deleteVideogame);

export default videogamesRouter;
