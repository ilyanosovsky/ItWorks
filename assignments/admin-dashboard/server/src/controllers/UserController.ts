import { Request, Response } from "express";
import User from "../models/User";

export const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password, role, dob } = req.body;

      console.log("Received request to create user:", req.body);

      // Validate input fields
      if (!email || !password) {
        console.log("Validation failed: Email and password are required");
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("User with this email already exists:", email);
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

      console.log("Creating new user:", newUser);

      await newUser.save();

      console.log("User created successfully:", newUser);

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async getUsers(req: Request, res: Response) {
    try {
      console.log("Attempting to fetch users...");
      const users = await User.find();
      console.log("Users fetched successfully:", users);
      res.json({ users });
    } catch (error) {
      console.error("Error fetching users:", error);
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
      console.error("Error fetching user:", error);
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
      console.error("Error updating user:", error);
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
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
