import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(indexRouter);

app.get("/", (req, res) => res.send("Hola Mundo!!!"));

export default app;