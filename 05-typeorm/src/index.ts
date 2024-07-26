import "reflect-metadata";

import dotenv from "dotenv";
import app from "./server";
import { AppDataSource } from "./config/data-source";

dotenv.config();

const PORT = process.env.PORT || 3002;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
