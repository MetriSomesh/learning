const mongoose = require("mongoose");

const connectDB = async () => {
  const DB_URL = process.env.DB_CONNECTION_STRING;

  try {
    await mongoose.connect(DB_URL);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("Some error occured: ", error.message);
  }
};

module.exports = connectDB;
