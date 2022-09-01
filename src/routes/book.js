const { Router } = require('express');
const bookController = require('../controllers/book');

const bookRouter = new Router();


bookRouter
  .route('/')
  .get(bookController.getBooks)
  .post(bookController.createBook);

bookRouter
  .route('/:id')
  .get(bookController.getBookById)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = bookRouter;