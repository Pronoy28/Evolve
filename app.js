const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started");
});
