const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
let a = "Hello, world";
const handleData = (req, res) => {
  console.log(req.body);
  a = req.body;
};
app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);
  res.send(req.body);
  handleData(req, res);
  res.sendStatus(200);
});
app.get("/", (req, res) => {
  res.send(a);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
