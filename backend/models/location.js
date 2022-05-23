const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");


const locationSchema = mongoose.Schema({
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
    streetAddress: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
    },
    city: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    state: {
        type: String,
        required: true,
        length: 2,
    },
    country: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60,
    },
    phone: {
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
            name: this.name,
            category: this.category,
            streetAddress: this.streetAddress,
            city: this.city,
            state: this.state,
            country: this.country,
            phone: this.phone,
            isOwnerRegistered: this.isOwnerRegistered,
            ownerName: this.ownerName,
        },
        process.env.JWT_SECRET
    );
};

const validateLocation = (location) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(120).required(),
        category: Joi.string().min(3).max(50).required(),
        streetAddress: Joi.string().min(5).max(100).required(),
        city: Joi.string.min(3).max(50).required(),
        state: Joi.string.length(2).required(),
        country: Joi.string.min(2).max(60).required(),
        phone: Joi.string.min(10).max(20),
        isOwnerRegistered: Joi.bool(),
        ownerName:  Joi.string.min(2).max(50)
    });

    return schema.validate(location);

};

const Location = mongoose.model("Location", locationSchema);

module.exports.Location = Location;
module.exports.locationSchema = locationSchema;
module.exports.validateLocation = validateLocation;
