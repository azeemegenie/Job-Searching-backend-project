require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../Models/Users");
const sendApiResponse = require("../utilities/sendApiResponse");

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userData = await User.findOne({
    email: email,
  });
  if (
    typeof userData !== "undefined" &&
    userData !== null &&
    userData.length !== null
  ) {
    let checkPassword = bcrypt.compareSync(password, userData.password); // true
    if (!checkPassword) {
      res.json({ error: true, message: "Incorrect password." });
      return false;
    }
    const user = {
      email: userData.email,
      userid: userData._id,
    };
    const signedUser = await User.findOne({ _id: user.userid }).exec();
    const token = await jwt.sign(
      { user: signedUser },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      error: false,
      data: {
        loggedin: true,
        token,
        email: user.email,
        userid: user.userid,
      },
      user: signedUser,
      message: "Successfully logged in",
    });
  } else {
    res.json({ error: true, message: "The account does not exist." });
  }
};

const getUser = async (req, res) => {
  const userData = req.user;
  const id = userData._id;

  try {
    const user = await User.findById(id);
    let data = {
      user,
    };
    sendApiResponse(res, data, 200, "");
  } catch (error) {
    sendApiResponse(res, [], 200, "User not found");
  }
};

const dummyUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    let password = bcrypt.hashSync("12341234", salt);
    let user = {
      name: "User",
      email: "user@gmail.com",
      password: password,
      role: "location",
    };
    user = await User.create(user);
    res.json({ message: "User created with password", user });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  signIn,
  getUser,
  dummyUser,
};
