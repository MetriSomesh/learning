const express = require("express");

const adminMiddleware = async function (req, res, next) {
  const token = await req.headers.token;
  if (!token) {
    return res.status(401).json({ msg: "Token required" });
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded.username) {
    next();
  } else {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
};

module.exports = adminMiddleware;
