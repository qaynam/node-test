import { Router } from "express";
import fs from "node:fs";
import https from 'node:https'

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
  let body = '';
  https.get('https://picsum.photos/v2/list?limit=1', (resp) => {
    resp.on('data', (chunk) => {
      body += chunk;
    })
    resp.on('end', () => {
      res.send(body);
    });
  });
});
