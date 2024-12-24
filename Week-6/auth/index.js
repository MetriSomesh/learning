const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const users = [];
const JWT_SECRET = "kiratlovekiara";

// async function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   let token = "";

//   for (let i = 0; i < 16; i++) {
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      msg: "Invalid body",
    });
  }
  try {
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({
        msg: "Already have an account please signin",
      });
    }
    users.push({
      email: email,
      password: password,
    });
    return res.status(200).json({
      msg: "User created",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      error: error.message,
    });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      msg: "Invalid body",
    });
  }
  try {
    const user = await users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      //   const token = await generateToken();
      const token = await jwt.sign(
        {
          email: email,
        },
        JWT_SECRET
      );
      console.log(token);
      return res.status(200).json({
        msg: "Token generated",
        token: token,
        users: users,
      });
    } else {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "something went wrong",
      error: error.message,
    });
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.authorization;
  const decoddedInfo = jwt.verify(token, JWT_SECRET);
  const user = users.find((u) => u.email === decoddedInfo.email);
  if (user) {
    return res.status(200).json({
      msg: "REq completed",
      email: user.email,
    });
  } else {
    return res.status(401).json({
      msg: "User is not authenticated",
    });
  }
});
app.listen(3000);
