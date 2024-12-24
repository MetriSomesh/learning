const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  cname: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
