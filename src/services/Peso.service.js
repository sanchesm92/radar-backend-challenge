const { Peso } = require('../models');

const getPesos = async () => {
  const result = await Peso.findAll();
  return result;
};

module.exports = {
  getPesos,
};
