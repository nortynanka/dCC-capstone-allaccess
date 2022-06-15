const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const postSchema = mongoose.Schema({
    locationID: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    currentDate: {
        type: Date,
        required: true,
    },
    visitDate: {
        type: Date,
        required: true,
    },
    isOwner: {
        type: Boolean,
        required: true,
    },
    isCaregiver: {
        type: Boolean,
        required: false,
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
    },
    employeeAttitudes: {
        type: Boolean,
        required: false,
    },
    notes: {
        type: String,
        minLength: 10,
        maxLength: 5000,
        required: true,
    },
});

postSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            locationID: this.locationID,
            author: this.author,
            currentDate: this.currentDate,
            visitDate: this.visitDate,
            isCaregiver: this.isCaregiver,
            isOwner: this.isOwner,
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
            employeeAttitudes: this.employeeAttitudes,
            notes: this.notes
        },
        process.env.JWT_SECRET
    );
};

const validatePost = (post) => {
    const schema = Joi.object({
        locationID: Joi.string(),
        author: Joi.string().min(5).max(50).required(),
        currentDate: Joi.date().required(),
        visitDate: Joi.date().required(),
        isOwner: Joi.bool(),
        isCaregiver: Joi.bool(),
        hasOnSiteParking: Joi.bool(),
        hasEntrances: Joi.bool(),
        isOneLevel: Joi.bool(),
        hasElevator: Joi.bool(),
        hasEscalator: Joi.bool(),
        hasStairsOnly: Joi.bool(),
        hasHearingDevices: Joi.bool(),
        hasVisualAids: Joi.bool(),
        hasAssistants: Joi.bool(),
        hasSeatingSection: Joi.bool(),
        employeeAttitudes: Joi.bool(),
        notes: Joi.string().min(10).max(5000).required()
    })

    return schema.validate(post);

};

const Post = mongoose.model("Post", postSchema);

module.exports.Post = Post;
module.exports.postSchema = postSchema;
module.exports.validatePost = validatePost;