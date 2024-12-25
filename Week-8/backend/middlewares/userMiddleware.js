const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const userMiddleware = async function (req, res, next) {
  const token = await req.headers.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ msg: "Token required" });
  }
  const decoded = await jwt.verify(token, JWT_SECRET);
  console.log("THe value in decoded: ", decoded);
  if (decoded) {
    next();
  } else {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
};

module.exports = userMiddleware;
