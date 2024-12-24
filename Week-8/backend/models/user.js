const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  myCourses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Purchase",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
