const express = require("express");
require("dotenv").config();

const userMiddleware = require("../../middlewares/userMiddleware");
const User = require("../../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Course = require("../../models/course");
const Purchase = require("../../models/purchase");
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/signup", async (req, res) => {
  console.log("API hit");
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res.status(201).json({ msg: "user already exitss", user: user });
    }
    const newUser = new User({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ msg: "user created successfully", user: newUser._doc });
  } catch (error) {
    console.log("SOME ERROR OCCURED: ", error.message);
    return res.status(500).json({
      msg: "something went wrong",
      error,
    });
  }
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(404).json({ msg: "User does not exitst" });
    }
    if (user.password == body.password) {
      const token = await jwt.sign(user.firstName, JWT_SECRET);
      return res.status(200).json({
        msg: "Token genreated",
        token: token,
      });
    } else {
      return res.status(400).json({ msg: "Wrong username or password" });
    }
  } catch (error) {
    console.log("Error occured: ", error.message);
    return res.status(500).json({
      msg: "something went wrong",
      error,
    });
  }
});

router.post("/buyCourse", userMiddleware, async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ _id: body.userId });
  if (!user) {
    return res.status(404).json({ msg: "user not found" });
  }
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const newCourse = await new Purchase({
      courseId: body.courseId,
      userId: body.userId,
    });
    await newCourse.save();
    await user.myCourses.push(newCourse._id);
    await user.save();
    const course = await Course.findOne({ _id: body.courseId });
    return res
      .status(200)
      .json({ msg: "course purchased succedssfully", course: course });
  } catch (error) {
    console.log("some error occured: ", error.message);
    return res.status(500).json({
      msg: "Something went wrong",
      error,
    });
  }
});

router.post("/mycourses", userMiddleware, async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const purchases = await User.findById(body.userId).populate({
      path: "myCourses",
      populate: {
        path: "courseId",
        model: "Course",
      },
    });
    if (!purchases) {
      return res.status(404).json({ msg: "No courses available" });
    }
    return res.status(200).json({
      msg: "Courses retrived",
      courses: purchases,
    });
  } catch (error) {
    console.log("Some error occured: ", error.message);
    return res.status(500).json({ msg: "Something went wrong", error });
  }
});

module.exports = router;
