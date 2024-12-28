const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "slkdjflksdjaf";
const users = [];

app.post("/signup", (req, res) => {
  const body = req.body;

  if (users.find((user) => user.username === body.username)) {
    return res.status(400).json({
      msg: "user already exists",
    });
  }
  users.push({
    username: body.username,
    password: body.password,
  });

  return res.status(200).json({ msg: "User created" });
});

app.post("/signin", async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid rquest" });
  }
  const user = users.find(
    (user) => user.username === body.username && user.password === body.password
  );
  if (!user) {
    return res.status(404).json({ msg: "user does not exists" });
  } else {
    const token = await jwt.sign(body.username, JWT_SECRET);
    return res.status(200).json({ token: token });
  }
});

app.get("/me", authMiddleWare, async (req, res) => {
  res.status(200).json({
    msg: "/me requers success",
    username: req.username,
  });
});

async function authMiddleWare(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ msg: "User is not authenticated" });
  }
  const decodedToken = await jwt.verify(token, JWT_SECRET);
  if (!decodedToken) {
    return res.status(401).json({ msg: "User is unauthorized" });
  } else {
    if (decodedToken.username) {
      req.username = decodedToken.username;
      next();
    } else {
      return res.status(401).json({ msg: "User is unauthorized" });
    }
  }
}

app.listen(3000);
