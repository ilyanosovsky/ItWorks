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

        const book = await Book.find() //grab ALL the books
        res.status(201).json(book); //return it all
    } catch (err) {
        res.status(409).json({ message: err.message })
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