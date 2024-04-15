import express from "express";
import { addBook, getAllBooks, getBook } from "../controllers/books.js";

const router = express.Router();

// CREATE
router.post("/", addBook);

// READ
router.get('/', getAllBooks);
router.get('/:id', getBook);