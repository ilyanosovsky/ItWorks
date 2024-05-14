import mongoose from "mongoose";
import "dotenv/config";
import { encryptStr } from "../utils/encryptStr";
import Admin from "../models/Admin";

async function seedAdmin() {
  try {
    await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions
    );

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists in the database.");
      return;
    }

    // Encrypt password
    const encryptedPassword = encryptStr("admin");

    // Create admin user
    const admin = new Admin({
      username: "admin",
      password: encryptedPassword,
    });

    await admin.save();

    console.log("Admin user added to the database.");
  } catch (error) {
    console.error("Error seeding admin user:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seedAdmin();
