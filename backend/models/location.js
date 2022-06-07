const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");


const locationSchema = mongoose.Schema({
    place_id: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 120,
    },
    category: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    formatted_address: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 500,
    },
    formatted_phone_number: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 20,
    },
    isOwnerRegistered: {
        type: Boolean,
        required: false,
    },
    ownerName: {
        type: String,
        required: false,
        minLength: 2,
        maxLength: 50,
    },
});

locationSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            place_id: this.place_id,
            name: this.name,
            category: this.category,
            formatted_address: this.formatted_address,
            formatted_phone_number: this.formatted_phone_number,
            isOwnerRegistered: this.isOwnerRegistered,
            ownerName: this.ownerName,
        },
        process.env.JWT_SECRET
    );
};

const validateLocation = (location) => {
    const schema = Joi.object({
        place_id: Joi.string(),
        name: Joi.string().min(5).max(120).required(),
        category: Joi.string().min(3).max(50).required(),
        formatted_address: Joi.string().min(5).max(500).required(),
        formatted_phone_number: Joi.string().min(10).max(20).required(),
        isOwnerRegistered: Joi.bool(),
        ownerName:  Joi.string().min(2).max(50)
    });

    return schema.validate(location);

};

const Location = mongoose.model("Location", locationSchema);

module.exports.Location = Location;
module.exports.locationSchema = locationSchema;
module.exports.validateLocation = validateLocation;
