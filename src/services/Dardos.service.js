const { Dardos } = require('../models');

const getDardos = async () => {
  const result = await Dardos.findAll();
  return result;
};

const createNewDardos = async (obj) => {
  const unidade = obj.unidade || 'm';
  const result = await Dardos.create({ ...obj, competicao: 'competição dardos', unidade });
  return result;
};

module.exports = {
  getDardos,
  createNewDardos,
};
