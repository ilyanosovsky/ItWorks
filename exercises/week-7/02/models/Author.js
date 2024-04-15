import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true } //to add when created, updated
);

const Author = mongoose.model("Author", AuthorSchema);
export default Author;
