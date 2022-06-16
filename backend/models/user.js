const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 255,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 120,
    },
    address: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 80,
    },
    bio: {
        type: String,
        required: false,
        minLength: 5,
        maxLength: 5000
    },
    isAdmin: {
        type: Boolean,
        required: false,
    },
    isCaregiver: {
        type: Boolean,
        required: false,
    },
    isOwner: {
        type: Boolean,
        required: false,
    }
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            nickname: this.name,
            email: this.email,
            address: this.address,
            bio: this.bio,
            isAdmin: this.isAdmin,
            isCaregiver: this.isCaregiver,
            isOwner: this.isOwner
        },
        process.env.JWT_SECRET
    );
};

const validateUser = (user) => {
    const schema = Joi.object({
        nickname: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(120).required(),
        address: Joi.string().min(2).max(80).required(),
        bio: Joi.string().min(5).max(5000),
        isAdmin: Joi.bool(),
        isCaregiver: Joi.bool(),
        isOwner: Joi.bool()
    });

    return schema.validate(user);
};

const validateLogin = (req) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(120).required()
    });

    return schema.validate(req);
};

const User = mongoose.model("User", userSchema);


module.exports.User = User;
module.exports.userSchema = userSchema;
module.exports.validateUser = validateUser;
module.exports.validateLogin = validateLogin;
