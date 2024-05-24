import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { encryptStr, decipher } from "../utils/encryptStr";
import Admin, { AdminDocument } from "../models/Admin";

export const AdminController = {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      // Find admin by username
      const admin = await Admin.findOne({ username });

      // If admin is not found, return unauthorized status
      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Decrypt stored password and verify
      const decryptedPassword = decipher("SECRET")(admin.password);
      if (password !== decryptedPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // If authentication is successful, generate JWT token
      const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      // Respond with token
      res.status(200).json({ token });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
