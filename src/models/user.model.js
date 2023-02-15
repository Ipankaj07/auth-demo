const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        googleId: String,
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        profilePicture: String
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("User", userSchema);
