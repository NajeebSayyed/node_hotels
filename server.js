const express = require("express");
const db = require("./db");
const Person = require("./Person");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/chicken", (req, res) => {
  res.send("I would like to serve you chicken");
});

const personRoutes = require("./routers/personRoutes");
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("Linstening on port 3000");
});
