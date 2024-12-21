// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");

const app = express();

app.use(express.json());

let noOfRequests = 0;

app.use((req, res, next) => {
  noOfRequests += 1;
  next();
});
app.get("/", function (req, res) {
  res.status(200).send("GET Request Completed");
});

app.post("/", function (req, res) {
  res.status(200).send("POST Request Completed");
});

app.get("/getTotalRequstCount", function (req, res) {
  res.status(200).json({ noOfRequests: noOfRequests });
});

app.listen(3000);
