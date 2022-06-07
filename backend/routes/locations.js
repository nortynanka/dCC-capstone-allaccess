const { Location, validateLocation } = require("../models/location");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/googlePlace/:userInput", async (req, res) => {
  try {
    let response = await axios.get(
      //`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${req.params.userInput}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry%2Cplace_id&key=API_KEY_HERE`
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${req.params.userInput}&location=43.038,-87.906&radius=50&fields=formatted_address%2Cname%2Cgeometry%2Cplace_id&key=API_KEY_HERE`
    );
    return res.send(response.data.results);
  } catch (error) {
    return res.send(error);
  }
});

// POST new location
router.post("/createNew", async (req, res) => {
  try {
    const { error } = validateLocation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let location = await Location.findOne({ name: req.body.name });
    if (location)
      return res
        .status(400)
        .send(
          `Location "${req.body.name}" already registered. Please submit a PUT request instead.`
        );

    location = new Location({
      place_id: req.body.place_id,
      name: req.body.name,
      category: req.body.category,
      formatted_address: req.body.formatted_address,
      formatted_phone_number: req.body.formatted_phone_number,
      isOwnerRegistered: req.body.isOwnerRegistered,
      ownerName: req.body.ownerName,
    });

    await location.save();

    return res.send({
      _id: location._id,
      name: location.name,
      category: location.category,
      formatted_address: location.formatted_address,
      formatted_phone_number: location.formatted_phone_number,
      isOwnerRegistered: location.isOwnerRegistered,
      ownerName: location.ownerName,
    });
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}.`);
  }
});

// GET all locations
router.get("/", [auth], async (req, res) => {
  try {
    const locations = await Location.find();

    return res.send(locations);
  } catch (error) {
    return res.status(500).send(`Internal server error: ${error}`);
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
  } catch (error) {
    return res.status(500).send(`Internal server error: ${error}`);
  }
});

// PUT update to location
router.put("/:locationID/updateLocation", [auth], async (req, res) => {
  try {
    const { error } = validateLocation(req.body);
    if (error)
      return res.status(400).send(`Body for location is not valid: ${error}`);
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
    return res.status(500).send(`Internal server error: ${ex}`);
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
    return res.status(500).send(`Internal server error: ${ex}`);
  }
});

module.exports = router;
