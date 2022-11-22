const BookService = require('../services/book.service');

const ERROR = 'Algo deu errado!';

const getAll = async(_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: ERROR });
  }
};

const getById = async(req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    return res.status(200).json({ message: book });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: ERROR });
  }
};

const createBook = async(req, res) => {
  try {
    const now = new Date().getTime();
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook(
      title,
      author,
      pageQuantity,
      now,
      now);
    return res.status(201).json({ message: newBook });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: ERROR });
  }
};

const updatedBook = async(req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity });
    if (updatedBook) return res.status(201).json({ message: 'Book updated!' });
    return res.status(201).json({ message: 'Book not found!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: ERROR });
  }
};

const removeBook = async(req, res) => {
  try {
    const { id } = req.params;
    const removedBook = await BookService.removeBook(id);
    if (removedBook) return res.status(200).json({ message: 'Book removed!' });
    return res.status(200).json({ message: 'Book not found!'});
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: ERROR });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updatedBook,
  removeBook,
};