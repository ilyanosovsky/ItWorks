import Author from "../models/Author.js";

// CREATE
export const addAuthor = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth } = req.body;
    const newAuthor = new Author({
      firstName,
      lastName,
      dateOfBirth,
    });
    await newAuthor.save(); //save the Author

    const author = await Author.find(); //grab ALL the posts
    res.status(201).json(author); //return it all
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// READ
export const getAllAuthors = async (req, res) => {
  try {
    const author = await Author.find();
    res.status(200).json(author);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    res.status(200).json(author);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

