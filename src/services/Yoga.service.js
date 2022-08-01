const { Yoga } = require('../models');

const getYogas = async () => {
  const result = await Yoga.findAll();
  return result;
};

const createNewYoga = async (obj) => {
  const unidade = obj.unidade || 's';
  const result = await Yoga.create({ ...obj, competicao: 'competição yoga', unidade });
  return result;
};

module.exports = {
  getYogas,
  createNewYoga,
};
