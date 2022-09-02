const { Book, Reader, Genre, Author } = require('../models');

const get404Error = (model) => ({ error: `The ${model} could not be found.` });

const getModel = (model) => {
  const models = {
    book: Book,
    reader: Reader,
    genre: Genre,
    author: Author,
  };

  return models[model];
};


const getOptions = (model) => {
  if (model === 'book') return { include: Genre };

  if (model === 'genre') return { include: Book };

  return {};
};

const removePassword = (obj) => {
  if (obj.hasOwnProperty('password')) {
    delete obj.password;
  }

  return obj;
};

const getAll = async (res, model) => {
  const Model = getModel(model);

  const options = getOptions(Model);

  const items = await Model.findAll({...options})
    
  const itemsWithoutPassword = items.map((item) => {
    return removePassword(item.get());
  });

  res.status(200).json(itemsWithoutPassword);
};

const getAllBooks = (res, model) => {
  const Model = getModel(model);

  return Model.findAll({ include: Book }).then((items) => {
    res.status(200).json(items);
  });
};

const create = async (res, model, item) => {
  const Model = getModel(model);

  try {
    const newItem = await Model.create(item);
    const itemWithoutPassword = removePassword(newItem.get());
  
    res.status(201).json(itemWithoutPassword);
  } catch (error) {
    const errorMessages = error.errors.map((e) => e.message);

    res.status(400).json({ errors: errorMessages });
  }
};

const update = async (res, model, item, id) => {
  const Model = getModel(model);

  const [ itemsUpdated ]= await Model.update(item, { where: { id } });

  if (!itemsUpdated) {
    res.status(404).json(get404Error(model));
  } else {
    const updatedItem = await Model.findByPk(id);
    const itemWithoutPassword = removePassword(updatedItem.get());
    res.status(200).json(itemWithoutPassword);
  }
};

const getById = async (res, model, id) => {
  const Model = getModel(model);

  const options = getOptions(model);

  const item = await Model.findByPk(id, { ...options });

  if (!item) {
    res.status(404).json(get404Error(model));
  } else {
    const itemWithoutPassword = removePassword(item.dataValues);
    res.status(200).json(itemWithoutPassword);
  }
};

const deleteById = async (res, model, id) => {
  const Model = getModel(model);

  const itemsDeleted = await Model.destroy({ where: { id } });

  if (!itemsDeleted) {
    res.status(404).json(get404Error(model));
  } else {
    res.status(204).send();
  }
};

module.exports = {
  getAll,
  getAllBooks,
  create,
  update,
  getById,
  deleteById,
};