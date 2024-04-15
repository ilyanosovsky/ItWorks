import express from "express";
import { addAuthor, getAllAuthors, getAuthor } from "../controllers/authors.js";

const router = express.Router();

// READ
router.get("/:id", getAuthor);
router.get("/", getAllAuthors);

// CREATE
router.post("/", addAuthor);