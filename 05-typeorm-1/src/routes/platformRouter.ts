import { Router } from "express";
import { addPlatform, getPlatforms } from "../controllers/platformController";

const platformRouter = Router();

platformRouter.post("/", addPlatform);
platformRouter.get("/", getPlatforms);

export default platformRouter;
