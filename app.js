const express = require("express");
const app = express();
const cors = require("cors");

// this is to use .env file variables
require("dotenv").config();
const port = process.env.PORT;

// for req body
app.use(cors());
app.use(express.json());

// import connect to connect with the database
const connect = require("./db/connect");

// home route
app.get("/", (req, res) => {
  res.status(200).send({ message: "App started successfully!" });
});

// students route
app.use("/students", require("./routes/students"));

// admin route
app.use("/admin", require("./routes/admin"));

const start = async () => {
  try {
    await connect(process.env.URL);

    app.listen(port, () => {
      console.log(`App is listening at port ${port}`);
    });
  } catch (error) {
    console.log({ error: error.message });
  }
};

start();
