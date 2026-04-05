import express from "express";
import bcrypt from "bcryptjs"
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.json({ message: "User already existed " })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashPassword
    });
    await user.save();
    return res.status(200).json({
      success: true,
      message: "User registered successfully"
    })
  } catch (error) {
    return res.status(500).json({ message: "Error", error });
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1d" }
    )
    return res.status(200).json({ message: "Login successfully", token });
  } catch (error) {
    return res.status(500).json({ message: "Error", error });
  }
})

export default router;