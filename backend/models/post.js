const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const postSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    date: {
        type: Date,
        required: false,
        minLength: 4,
        maxLength: 32,
    },
    isOwner: {
        type: Boolean,
        required: false,
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
            author: this.author,
            date: this.date,
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
            notes: this.notes
        },
        process.env.JWT_SECRET
    );
};

const validatePost = (post) => {
    const schema = Joi.object({
        author: Joi.string().min(5).max(50).required(),
        date: Joi.date().min(4).max(32),
        isOwner: Joi.bool(),
        isCaregiver: Joi.bool(),
        hasOnSiteParking: Joi.bool(),
        hasEntrances: Joi.bool(),
        hasElevator: Joi.bool(),
        hasEscalator: Joi.bool(),
        hasStairsOnly: Joi.bool(),
        hasHearingDevices: Joi.bool(),
        hasVisualAids: Joi.bool(),
        hasAssistants: Joi.bool(),
        hasSeatingSection: Joi.bool(),
        notes: Joi.string().min(10).max(5000).required()
    })

    return schema.validate(post);

};

const Post = mongoose.model("Post", postSchema);

module.exports.Post = Post;
module.exports.postSchema = postSchema;
module.exports.validatePost = validatePost;