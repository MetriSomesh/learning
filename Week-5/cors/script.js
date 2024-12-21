const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/Week-5/cors/public/index.html"); This will host frontend and backend on same URL localhost:3000
// });                          No need to use cors then
app.use((req, res, next) => {
  try {
    const body = req.body;
    if (body) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Body is missing",
    });
  }
});

app.post("/sum", function (req, res) {
  const { num1, num2 } = req.body;
  const sum = num1 + num2;
  return res.status(200).json({
    sum,
  });
});

app.listen(3000);
