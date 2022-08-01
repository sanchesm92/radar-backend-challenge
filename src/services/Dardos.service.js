const { Dardos } = require('../models');

const getDardos = async () => {
  const result = await Dardos.findAll();
  return result;
};

module.exports = {
  getDardos,
};
