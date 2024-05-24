import mongoose, { Document } from "mongoose";

export interface AdminDocument extends Document {
  username: string;
  password: string;
}

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model<AdminDocument>("Admin", adminSchema);
export default Admin;
