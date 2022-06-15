const { User, validateLogin, validateUser } = require("../models/user");
const { Post, validatePost } = require("../models/post");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const bcrypt = require("bcrypt");
const express = require("express");
const { default: axios } = require("axios");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

// POST register a new user

router.post("/register", async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(400)
        .send(
          `Email ${req.body.email} already registered. Please login or try a different email.`
        );

    const salt = await bcrypt.genSalt(10);
    user = new User({
      nickname: req.body.nickname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
      address: req.body.address,
      isAdmin: req.body.isAdmin,
      isCaregiver: req.body.isCaregiver,
      isOwner: req.body.isOwner,
    });
    await user.save();

    const token = user.generateAuthToken();
    return res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send({
        _id: user._id,
        nickname: user.nickname,
        email: user.email,
        address: user.address,
        isAdmin: user.isAdmin,
        isCaregiver: user.isCaregiver,
        isOwner: user.isOwner,
      });
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}.`);
  }
});

// POST a valid login attempt

router.post("/login", async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send("val", error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(`Invalid email or password.`);

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or Password.");

    const token = user.generateAuthToken();
    return res.send(token);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

// GET all users

router.get("/", [auth], async (req, res) => {
  try {
    const users = await User.find();
    return res.send(users);
  } catch (ex) {
    return res.status(500).send(`Internal server error: ${ex}`);
  }
});

// GET user by ID

router.get("/:userID/getOneUser", [auth], async (req, res) => {
  try {
    let user = await User.findById(req.params.userID);
    if (!user)
      return res
        .status(400)
        .send(`User with ID ${req.params.userID} does not exist!`);
    await User.findById();
    return res.status(200).send(user);
  } catch (ex) {
    return res.status(500).send(`Internal server error: ${ex}`);
  }
});

// GET all business owners

// GET all regular users

// GET user's location from their profile

router.get("/:userID/getLocation", [auth], async (req, res) => {
  try {
    let user = await User.findById(req.params.userID);
    if (!user)
      return res
        .status(400)
        .send(`User with ID ${req.params.userID} does not exist!`);
    await User.findById();
    return res.status(200).send(user.address);
  } catch (ex) {
    return res.status(500).send(`Internal server error: ${ex}`);
  }
});

// GET distance to business from user's location

router.get(
  "/googlePlace/:userLocation/:destination",
  [auth],
  async (req, res) => {
    try {
      let userDistance =
        await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json
    ?destinations=${destination}
    &origins=${userLocation}
    &units=imperial
    &key=API_KEY`);
      return res.send(userDistance.data.rows.elements.distance.text);
    } catch (ex) {
      return res.status(500).send(`Internal server error: ${ex}`);
    }
  }
);

// PUT update to user

router.put("/:userID/updateUser", [auth], async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error)
      return res.status(400).send(`Body for user is not valid: ${error}`);
    let user = await User.findByIdAndUpdate(
      req.params.userID,
      { ...req.body },
      { new: true }
    );
    if (!user)
      return res
        .status(400)
        .send(`User with ObjectID ${req.params.userID} does not exist!`);

    const token = user.generateAuthToken();

    return res
      .status(200)
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(user);
  } catch (ex) {
    return res.status(500).send(`Internal server error: ${ex}`);
  }
});

// DELETE user by ID

router.delete("/:userID", [auth, admin], async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
    if (!user)
      return res
        .status(400)
        .send(`User with ObjectID ${req.params.userID} does not exist!`);
    await user.remove();

    const token = user.generateAuthToken();

    return res
      .status(200)
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(user);
  } catch (ex) {
    return res.status(500).send(`Internal server error: ${ex}`);
  }
});

module.exports = router;
