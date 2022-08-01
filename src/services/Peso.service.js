const { Peso } = require('../models');

const getPesos = async () => {
  const result = await Peso.findAll();
  return result;
};

const createNewPeso = async (obj) => {
  const result = await Peso.create({ ...obj, competicao: 'competição perda de peso', unidade: 'cal' });
  return result;
};

module.exports = {
  getPesos,
  createNewPeso,
};
