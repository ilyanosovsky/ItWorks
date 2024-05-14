import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to DB"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.use("/admin", AdminRoute);
app.use("/user", UserRoute);

app.listen(5001, () => {
  console.log("server started on Port 5001");
});
