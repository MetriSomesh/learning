const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const router = express.Router();
const adminMiddleware = require("../../middlewares/adminMiddleware");
const Admin = require("../../models/admin");
const Course = require("../../models/course");
const User = require("../../models/user");
const JWT_SECRET = process.env.JWT_SECRET;
router.post("/signup", async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res.status(201).json({ msg: "admin already exitss", admin: user });
    }
    const newAdmin = await Admin.create({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
    });
    await newAdmin.save();
    return res.status(200).json({ msg: "Admin created", admin: newAdmin });
  } catch (error) {
    console.log("Some error occured: ", error.message);
    return res.status(500).json({
      msg: "Some Error couccured",
      error: error,
    });
  }
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const admin = await Admin.findOne({ email: body.email });
    if (!admin) {
      return res.status(404).json({ msg: "Admin does not exitst" });
    }
    if (admin.password == body.password) {
      const token = await jwt.sign(body.email, JWT_SECRET);
      return res.status(200).json({
        msg: "Token generated",
        token: token,
      });
    } else {
      return res.status(400).json({ msg: "Wrong username or password" });
    }
  } catch (error) {
    console.log("ERROR while generating tokoen: ", error.message);
    return res.status(500).json({ err: error });
  }
});

router.post("/createCourse", adminMiddleware, async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "invalid request" });
  }
  try {
    const createrId = await Admin.findOne({ email: body.email });

    if (!createrId._id) {
      return res.status(404).json({ msg: "Admin not present" });
    }
    const newCourse = await Course.create({
      cname: body.cname,
      description: body.description,
      creatorId: createrId._id,
      imageUrl: body.imageUrl,
      price: body.price,
    });
    await newCourse.save();
    return res.status(200).json({
      msg: "New course Added",
      course: newCourse,
    });
  } catch (error) {
    console.log("Some error occrured: ", error.message);
    return res.status(500).json({
      msg: "Something went wrong",
      err: error,
    });
  }
});

router.post("/deleteCourse", adminMiddleware, async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const course = await Course.findOneAndDelete({ _id: body.courseId });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res
      .status(200)
      .json({ message: "Course deleted successfully", course: course });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting course", error: error.message });
  }
});

module.exports = router;
