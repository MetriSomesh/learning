const express = require("express");
const { route } = require("../user/user");
const router = express.Router();
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.post("/signup", async (req, res) => {});

router.post("/signin", async (req, res) => {});

router.post("/createCourse", adminMiddleware, async (req, res) => {});

router.post("/deleteCourse", adminMiddleware, async (req, res) => {});

router.post("/addCourseContent", adminMiddleware, async (req, res) => {});

module.exports = router;
