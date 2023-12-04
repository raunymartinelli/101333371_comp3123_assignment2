const express = require("express");
//const bcrypt = require('bcrypt');
const User = require("../models/Users"); // Make sure the path is correct
const router = express.Router();
const mongoose = require ("mongoose")

// Middleware to check if the database is connected
function checkDatabaseConnection(req, res, next) {
    if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({ status: false, message: "Database not connected." });
    }
    next();
}

router.post("/signup", checkDatabaseConnection, async (req, res) => {
    try {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        res.status(201).json({
            status: "true",
            message: "Account created."
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                status: "false",
                message: "Username or email already exists."
            });
        } else {
            console.error('Signup error:', error);
            res.status(500).json({
                status: "false",
                message: "An error occurred while creating the account."
            });
        }
    }
});

router.post("/login", checkDatabaseConnection, async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && password === user.password) {//await bcrypt.compare(password, user.password)) {
            res.status(200).json({
                status: "true",
                message: "User logged in successfully."
            });
        } else {
            res.status(401).json({
                status: "false",
                message: "Invalid username or password."
            });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            status: "false",
            message: "An error occurred during login."
        });
    }
});

module.exports = router;
