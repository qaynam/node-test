import { Router } from "express";
import fs from "node:fs";

export const route = Router();

route.get("/", (req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
})

route.get("/random-image", async (req, res) => {
  const body = await fetch('https://picsum.photos/v2/list?limit=1');
  const data = await body.json();
  res.send(data);
});
