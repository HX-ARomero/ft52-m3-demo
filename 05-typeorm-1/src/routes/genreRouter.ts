
import { addGenre, getGenres, updateGenre } from "../controllers/genreController";
import { Router } from "express";

const genreRouter = Router();

genreRouter.post("/", addGenre);
genreRouter.get("/", getGenres);
genreRouter.put("/", updateGenre);

export default genreRouter;