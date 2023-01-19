const mongoose = require("mongoose");

const connect = (url) => {
  mongoose.set("strictQuery", false);
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to db successfully");
};

module.exports = connect;
