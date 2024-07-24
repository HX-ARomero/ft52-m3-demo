import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import tareaRouter from "./routes/tareaRouter";
// import autenticacion from "./middlewares/autenticacionMiddleware";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(morgan("dev"));
// app.use(autenticacion);

app.use("/tareas", tareaRouter);

app.get("/", (req, res) => res.send("Hola Mundo!!!"));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
