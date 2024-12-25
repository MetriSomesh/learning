const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const adminMiddleware = async function (req, res, next) {
  const token = await req.headers.token;
  if (!token) {
    return res.status(401).json({ msg: "Token required" });
  }
  const decoded = await jwt.verify(token, JWT_SECRET);
  if (decoded) {
    next();
  } else {
    return res.status(401).json({ msg: "Unauthorized admin" });
  }
};

module.exports = adminMiddleware;
