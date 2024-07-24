import dotenv from "dotenv";
import app from "./server";

dotenv.config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
