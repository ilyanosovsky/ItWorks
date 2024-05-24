import Author from "../models/Author.js";
import Book from "../models/Book.js";

// CREATE
export const addBook = async (req, res) => {
  try {
    const { authorId, name, price } = req.body;
    const author = await Author.findById(authorId);
    const newBook = new Book({
      authorId,
      firstName: author.firstName,
      lastName: author.lastName,
      name,
      price,
    });
    await newBook.save(); //save the book

    const book = await Book.find(); //grab ALL the books
    res.status(201).json(book); //return it all
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// READ
export const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { authorId, name, price } = req.body;

  try {
    // Check if the book exists
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Update book details
    if (authorId) {
      // If authorId is provided, update author details
      const author = await Author.findById(authorId);
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }
      existingBook.authorId = authorId;
      existingBook.firstName = author.firstName;
      existingBook.lastName = author.lastName;
    }
    if (name) {
      existingBook.name = name;
    }
    if (price) {
      existingBook.price = price;
    }

    // Save the updated book
    await existingBook.save();

    // Return updated book
    res.status(200).json(existingBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the book exists
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Delete the book
    await existingBook.deleteOne();

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
