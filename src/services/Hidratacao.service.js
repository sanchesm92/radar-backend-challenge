const { Hidratacao } = require('../models');

const getHidratacoes = async () => {
  const result = await Hidratacao.findAll();
  return result;
};

module.exports = {
  getHidratacoes,
};
