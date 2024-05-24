import { Request, Response, NextFunction } from "express";
import Admin, { AdminDocument } from "../models/Admin";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  admin?: AdminDocument;
}

export const authenticateAdmin = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  // Check if authorization header is missing
  if (!authHeader) {
    return res.status(401).json({ message: "Admin credentials missing" });
  }

  try {
    const token = authHeader.split(" ")[1]; // Get token from Authorization header

    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as {
      adminId: string;
    };

    // Find admin by ID
    const admin = await Admin.findById(decodedToken.adminId);

    if (!admin) {
      console.log("Admin not found for token:", token);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.admin = admin;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
