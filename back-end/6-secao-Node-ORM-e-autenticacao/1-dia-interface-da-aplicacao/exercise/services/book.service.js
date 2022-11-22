const { Book } = require('../models');

const getAll = async() => {
  const books = await Book.findAll();
  return books;
};

const getById = async(id) => {
  const book = await Book.findByPk(id);
  if (!book) return "Book not found";
  return book;
};

const createBook = async (title, author, pageQuantity, createdAt, updatedAt) => {
  const newBook = await Book.create({ title, author, pageQuantity, createdAt, updatedAt });
  return newBook;
};

const updateBook = async (id, bookData) => {
  const updatedAt = new Date().getTime();
  const { title, author, pageQuantity } = bookData;
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, updatedAt },
    { where: { id } },
  );
  return updatedBook;
};

const removeBook = async (id) => {
  const removedBook = await Book.destroy({ where: { id }});
  return removedBook;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
}