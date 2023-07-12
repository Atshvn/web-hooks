const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);
  res.send(req.body);
  res.sendStatus(200);
});
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
