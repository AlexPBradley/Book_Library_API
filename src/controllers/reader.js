const { Reader } = require('../models');

const {
  getAll,
  create,
  update,
  getById,
  deleteById,
} = require('./helpers');

const getReaders = (_, res) => getAll(res, 'reader');

const createReader = (req, res) => create(res, 'reader', req.body);

const updateReader = (req, res) =>
  update(res, 'reader', req.body, req.params.id);

const getReaderById = (req, res) => getById(res, 'reader', req.params.id);

const deleteReader = (req, res) => deleteById(res, 'reader', req.params.id);

module.exports = {
  getReaders,
  getReaderById,
  createReader,
  updateReader,
  deleteReader,
};