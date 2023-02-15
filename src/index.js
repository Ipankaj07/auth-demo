const express = require("express");

const session = require("express-session");
const userController = require("./controllers/user.controller");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    },
  })
);

const passport = require("./configs/passport");
app.use(passport.initialize());
app.use(passport.session());

/* Google Auth Routes */
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

/* To see All Login User Details */
app.use('/user', userController);

module.exports = app;
