const {
  getAll,
  create,
  update,
  getById,
  deleteById,
} = require('./helpers');


exports.getBooks = async (_, res) => getAll(res, 'book');

exports.createBook = async (req, res) => create(res, 'book', req.body);

exports.updateBook = async (req, res) => update(res, 'book', req.body, req.params.id);

exports.getBookById = async (req, res) => getById(res, 'book', req.params.id);

exports.deleteBook = async (req, res) => deleteById(res, 'book', req.params.id);

// module.exports = {
//   getBooks,
//   getBookById,
//   createBook,
//   updateBook,
//   deleteBook,
// };