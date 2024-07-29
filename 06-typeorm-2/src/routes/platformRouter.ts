import { Router } from "express";
import { addPlatform, getPlatformById, getPlatforms } from "../controllers/platformController";

const platformRouter = Router();

platformRouter.post("/", addPlatform);
platformRouter.get("/", getPlatforms);
platformRouter.get("/:name", getPlatformById);

export default platformRouter;
