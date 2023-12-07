import express from "express";
const app = express();

app.get("/", async (req, res) => {
  const body = await fetch('https://picsum.photos/v2/list?limit=1');
  const data = await body.json();
  res.send(data);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});