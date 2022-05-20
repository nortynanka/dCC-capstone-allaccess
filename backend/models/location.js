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
        minLength: 11,
        maxLength: 22,
    },
    isOwnerRegistered: {
        type: Boolean,
        required: false,
    },
    ownerName: {
        type: String,
        required: false,
        minLength: 5,
        maxLength: 50,
    },
    hasOnSiteParking: {
        type: Boolean,
        required: false,
    },
    hasEntrances: {
        type: Boolean,
        required: false,
    },
    isOneLevel: {
        type: Boolean,
        required: false,
    },
    hasElevator: {
        type: Boolean,
        required: false,
    },
    hasEscalator: {
        type: Boolean,
        required: false,
    },
    hasStairsOnly: {
        type: Boolean,
        required: false,
    },
    hasHearingDevices: {
        type: Boolean,
        required: false,
    },
    hasVisualAids: {
        type: Boolean,
        required: false,
    },
    hasAssistants: {
        type: Boolean,
        required: false,
    },
    hasSeatingSection: {
        type: Boolean,
        required: false,
    }
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
            hasOnSiteParking: this.hasParking,
            hasEntrances: this.hasEntrances,
            isOneLevel: this.isOneLevel,
            hasElevator: this.hasElevator,
            hasEscalator: this.hasEscalator,
            hasStairsOnly: this.hasStairsOnly,
            hasHearingDevices: this.hasHearingDevices,
            hasVisualAids: this.hasVisualAids,
            hasAssistants: this.hasAssistants,
            hasSeatingSection: this.hasSeatingSection,
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
    });

    return schema.validate(location);

};

const Location = mongoose.model("Location", locationSchema);

module.exports.Location = Location;
module.exports.locationSchema = locationSchema;
module.exports.validateLocation = validateLocation;
