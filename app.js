const express = require("express");
const app = express();
const cors = require("cors");

// for google auth
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport");

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// this is to use .env file variables
require("dotenv").config();
const port = process.env.PORT;

// for req body
app.use(cors());
app.use(express.json());

// import connect to connect with the database
const connect = require("./db/connect");

// routes for google auth
app.get("/", (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>");
});

// Auth
app.get(
  "/auth",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Auth Callback
app.get(
  "/auth/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  })
);

// Success
app.get("/auth/callback/success", (req, res) => {
  if (!req.user) res.redirect("/auth/callback/failure");
  res.send("Welcome " + req.user.email);
});

// failure
app.get("/auth/callback/failure", (req, res) => {
  res.send("Error");
});

// home route
// app.get("/", (req, res) => {
//   res.status(200).send({ message: "App started successfully!" });
// });

// students route
// app.use("/students", require("./routes/students"));

// admin route
// app.use("/admin", require("./routes/admin"));

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
