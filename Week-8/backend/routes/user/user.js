const express = require("express");
const userMiddleware = require("../../middlewares/userMiddleware");
const User = require("../../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Course = require("../../models/course");
const Purchase = require("../../models/purchase");
const JWT_SECRET = process.env.JWT_SECRET;
router.post("/signup", async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const user = User.find({ email: body.email });
    if (user) {
      return res.status(201).redirect("/signin");
    }
    const newUser = new User({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
    });
    await newUser.save();
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
    const user = User.find({ email: body.email });
    if (!user) {
      return res.status(404).redirect("/signup");
    }
    const token = jwt.sign(user.firstName, JWT_SECRET);
    return res.status(200).json({
      msg: "Token genreated",
      token: token,
    });
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
  if (!body) {
    return res.status(400).json({ msg: "Invalid body" });
  }
  try {
    const newCourse = new Purchase({
      courseId: body.courseId,
      userId: body.userId,
    });
    await newCourse.save();
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
    const purchases = await User.findById(body.userId).populate("Purchase");
    if (purchases.myCourses.length <= 0) {
      return res.status(404).json({ msg: "No courses available" });
    }
    return res.status(200).json({
      msg: "Courses retrived",
      courses: purchases.myCourses,
    });
  } catch (error) {
    console.log("Some error occured: ", error.message);
    return res.status(500).json({ msg: "Something went wrong", error });
  }
});

module.exports = router;
