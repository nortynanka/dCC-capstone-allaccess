const { Location, validateLocation } = require("../models/location");
const { Post, validatePost } = require("../models/post");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const express = require("express");
const axios = require("axios");
const router = express.Router();

// GET limited place details from Google Places API
router.get("/googlePlace/:userInput", async (req, res) => {
  try {
    let response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${req.params.userInput}&location=43.038,-87.906&radius=50&name%2Ctypes%2Cfields=formatted_address%2Cformatted_phone_number%2Cwebsite%2Curl%2Cphotos&place_id=ChIJcT3-inQZBYgRu3myuupgryA&key=API_KEY`
    );
    return res.send(response.data.results);
  } catch (ex) {
    return res.send(ex);
  }
});

// GET distance from user to business from Google Distance Matrix
router.get("/distanceMatrix/:userInput", async (req, res) => {
  try {
    let response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${businessAddress}&origins=${userAddress}&units=imperial&key=API_KEY`
    );
    return res.send(response.data.rows.elements.distance.text);
  } catch (ex) {
    return res.send(ex);
  }
});

// GET map of results from Google Maps Static API
router.get("/staticMap/:userInput", async (req, res) => {
  try {
    let response = await axios.get(
      `https://maps.googleapis.com/maps/api/staticmap?center=${userAddress}&zoom=10&size=400x400&markers=color:red%7Clabel:1%7C${result1}%7C&markers=color:red%7Clabel:2%7C${result2}%7C&markers=color:red%7Clabel:3%7C${result3}%7C&markers=color:red%7Clabel:4%7C${result4}%7C&markers=color:red%7Clabel:5%7C${result5}%7C&key=API_KEY`
    );
    return res.send(response.data);
  } catch (ex) {
    return res.send(ex);
  }
});

// POST new location
router.post("/createNew", async (req, res) => {
  try {
    const { ex } = validateLocation(req.body);
    if (ex) return res.status(400).send(ex.details[0].message);

    let location = await Location.findOne({ name: req.body.name });
    if (location)
      return res
        .status(400)
        .send(
          `Location "${req.body.name}" already registered. Please submit a PUT request instead.`
        );

    location = new Location({
      name: req.body.name,
      category: req.body.category,
      vicinity: req.body.vicinity,
      isOwnerRegistered: req.body.isOwnerRegistered,
      ownerName: req.body.ownerName,
      posts: req.body.posts,
    });

    await location.save();

    return res.send({
      _id: location._id,
      name: location.name,
      category: location.category,
      vicinity: location.vicinity,
      isOwnerRegistered: location.isOwnerRegistered,
      ownerName: location.ownerName,
      posts: location.posts,
    });
  } catch (ex) {
    return res.status(500).send(`Internal Server ex: ${ex}.`);
  }
});

// GET all locations
router.get("/", [auth], async (req, res) => {
  try {
    const locations = await Location.find();

    return res.send(locations);
  } catch (ex) {
    return res.status(500).send(`Internal server ex: ${ex}`);
  }
});

// GET location by ID
router.get("/:locationID/getOnelocation", [auth], async (req, res) => {
  try {
    let location = await Location.findById(req.params.locationID);
    if (!location)
      return res
        .status(400)
        .send(`location with ID ${req.params.locationID} does not exist!`);
    await Location.findById();
    return res.status(200).send(location);
  } catch (ex) {
    return res.status(500).send(`Internal server ex: ${ex}`);
  }
});

// PUT update to location
router.put("/:locationID/updateLocation", [auth], async (req, res) => {
  try {
    const { ex } = validateLocation(req.body);
    if (ex)
      return res.status(400).send(`Body for location is not valid: ${ex}`);
    let location = await Location.findByIdAndUpdate(
      req.params.locationID,
      { ...req.body },
      { new: true },
      { useFindAndModify: false }
    );
    if (!location)
      return res
        .status(400)
        .send(
          `Location with ObjectID ${req.params.locationID} does not exist!`
        );

    return res.status(200).send(location);
  } catch (ex) {
    return res.status(500).send(`Internal server ex: ${ex}`);
  }
});

// DELETE a location by ID
router.delete("/:locationID", [auth, admin], async (req, res) => {
  try {
    const location = await Location.findById(req.params.locationID);
    if (!location)
      return res
        .status(400)
        .send(
          `Location with ObjectID ${req.params.locationID} does not exist!`
        );
    await location.remove();

    return res.status(200).send(location);
  } catch (ex) {
    return res.status(500).send(`Internal server ex: ${ex}`);
  }
});

module.exports = router;

// POST new post to user by user ID

router.post("/:locationID/addPost", async (req, res) => {
  try {
    const { ex } = validatePost(req.body);
    if (ex) return res.status(400).send(ex);

    let location = await Location.findById(req.params.locationID);
    if (!location)
      return res
        .status(400)
        .send(`Location with ID ${req.params.locationID} does not exist!`);
    if (ex) return res.status(400).send(ex);

    const newPost = await new Post(req.body);
    location.posts.push(newPost);
    await location.save();

    return res.status(200).send(location);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

// GET all posts by location's MongoDB ID

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
    return res.status(500).send(`Internal server ex: ${ex}`);
  }
});

// DELETE location's post by post ID

router.delete("/:postID", [auth, admin], async (req, res) => {
  try {
    let post = await Post.findByIdAndDelete(req.params.postID);
    if (!post)
      return res
        .status(400)
        .send(`Post with ID ${req.params.postID} does not exist!`);
    return res.send(post);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});