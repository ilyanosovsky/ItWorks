import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authorRoutes from './routes/authors.js';
import bookRoutes from './routes/books.js';

dotenv.config();
const app = express();
app.use(express.json());

//ROUTES
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

// MONGOOSE - MongoDB SetUp
const PORT = process.env.PORT || 3030;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
