const { Peso } = require('../models');

const getPesos = async () => {
  const result = await Peso.findAll();
  return result;
};

const createNewPeso = async (obj) => {
  const unidade = obj.unidade || 'cal';
  const result = await Peso.create({ ...obj, competicao: 'competição perda de peso', unidade });
  return result;
};

module.exports = {
  getPesos,
  createNewPeso,
};
