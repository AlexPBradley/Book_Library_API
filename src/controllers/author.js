const { Author } = require('../models');

const {
    getAll,
    create,
    update,
    getById,
    deleteById,
} = require('./helpers');

const getAuthors = (_, res) => getAll(res, 'author');

const createAuthor = (req, res) => create(res, 'author', req.body);

const updateAuthor = (req, res) => update(res, 'author', req.body, req.params.id);

const getAuthorById = (req, res) => getById(res, 'author', req.params.id);

const deleteAuthor = (req, res) => deleteById(res, 'author', req.params.id);


module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    getAuthorById,
    deleteAuthor,
};