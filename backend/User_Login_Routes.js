const express = require("express");
const router = express.Router();
const User = require("./Model/User_schema");
const jwt=require('jsonwebtoken')
const { SECRET } = process.env

require('dotenv').config()

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json({ error: "An error has been caught - get" });
  }
});

router.post("/login", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await User.findOne({ Email: Email });
    console.log(user)
    if (!user || !user.validatePassword(Password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token=jwt.sign({userId:user._id},SECRET,{expiresIn:'1h'});

    res.status(200).json({ message: "Login successful", user ,token,userId:user._id});
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

router.post("/add_user", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const exist = await User.findOne({ Email });
    if (exist) {
      res.status(400).json({ message: "User already registered" });
    } else {
      const User_Added = new User({
        Email,
      });
      User_Added.setPassword(Password);
      const savedUser = await User_Added.save();
      res.status(201).json(savedUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
