const { Genre } = require('../models');

const {
    getAll,
    create,
    update,
    getById,
    deleteById,
} = require('./helpers');

const getGenres = (_, res) => getAll(res, 'genre');

const createGenre = (req, res) => create(res, 'genre', req.body);

const updateGenre = (req, res) => update(res, 'genre', req.body, req.params.id);

const getGenreById = (req, res) => getById(res, 'genre', req.params.id);

const deleteGenre = (req, res) => deleteById(res, 'genre', req.params.id);


module.exports = {
    getGenres,
    createGenre,
    updateGenre,
    getGenreById,
    deleteGenre,
};