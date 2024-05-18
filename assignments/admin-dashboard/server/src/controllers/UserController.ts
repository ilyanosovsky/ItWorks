import { Request, Response } from "express";
import User from "../models/User";

export const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password, role, dob } = req.body;

      // Validate input fields
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }

      // Create user
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        role,
        dob,
      });

      await newUser.save();

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async getUsers(req: Request, res: Response) {
    try {
      console.log("Attempting to fetch users...");
      const users = await User.find();
      res.json({ users });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const { firstName, lastName, role, dob } = req.body;

      const user = await User.findByIdAndUpdate(
        userId,
        { firstName, lastName, role, dob },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;

      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
