const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "Please provide username"],
    minlength: 6,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", UserSchema, "User");
