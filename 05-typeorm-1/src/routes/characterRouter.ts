import {
  addCharacter,
  getCharacters,
  updateCharacter,
} from "../controllers/characterController";

import { Router } from "express";

const characterRouter = Router();

characterRouter.post("/", addCharacter);
characterRouter.get("/", getCharacters);
characterRouter.put("/", updateCharacter);

export default characterRouter;
