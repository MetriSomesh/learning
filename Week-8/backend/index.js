const express = require("express");

const app = express();
const userRoutes = require("./routes/user/user");
const adminRoutes = require("./routes/admin/admin");
const userMiddleware = require("./middlewares/userMiddleware");
const connectDB = require("./db");
app.use(express.json());

connectDB();
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(3000);
