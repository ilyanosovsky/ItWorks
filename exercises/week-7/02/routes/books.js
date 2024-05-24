import express from "express";
import { addBook, getAllBooks, getBook, updateBook, deleteBook } from "../controllers/books.js";

const router = express.Router();

// CREATE
router.post("/", addBook);

// READ
router.get('/', getAllBooks);
router.get('/:id', getBook);

// UPDATE
router.put('/:id', updateBook);

// DELETE
router.delete('/:id', deleteBook);

export default router;