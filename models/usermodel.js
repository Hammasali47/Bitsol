const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  email: {
    type: String,
    default: 0,
    required: true,
  },
  password: {
    type: String,
    default: 0,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  contact: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;