import express from "express";
import { route } from "./routes.js";
const PORT = process.env.PORT || 30030;
const app = express();

app.use(route)

app.listen(PORT, () => {
  console.log("Server is running on port "+ PORT);
});