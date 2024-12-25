const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  const DB_URL = process.env.DB_CONNECTION_STRING;
  console.log(DB_URL);
  try {
    await mongoose.connect(DB_URL);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("Some error occured: ", error.message);
  }
};

module.exports = connectDB;
