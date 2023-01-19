const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
  },
  branch: {
    type: String,
  },
  degree: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = mongoose.model("Students", StudentSchema);
