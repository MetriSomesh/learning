// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the consol

const express = require("express");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  const obj = {
    Method: req.method,
    URL: req.url,
    timeStamp: Date.now(),
  };
  console.log(obj);
  next();
});

app.get("/getData", function (req, res) {
  res.status(200).send("GET Request completed");
});

app.post("/", function (req, res) {
  res.status(200).send("POST Request completed");
});

app.put("/putsome", function (req, res) {
  res.status(200).send("PUT Request completed");
});

app.listen(3000);
