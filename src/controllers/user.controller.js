const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;