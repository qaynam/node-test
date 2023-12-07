import express from "express";
import { route } from "./routes.js";

const app = express();

app.use(route)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});