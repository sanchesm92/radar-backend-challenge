const { Hidratacao } = require('../models');

const getHidratacoes = async () => {
  const result = await Hidratacao.findAll();
  return result;
};

const createNewHidratacao = async (obj) => {
  const unidade = obj.unidade || 'l';
  const result = await Hidratacao.create({ ...obj, competicao: 'competição hidratacao', unidade });
  return result;
};

module.exports = {
  getHidratacoes,
  createNewHidratacao,
};
