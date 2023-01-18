const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({});

module.exports = mongoose.model("Admin", AdminSchema);
