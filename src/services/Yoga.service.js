const { Yoga } = require('../models');

const getYogas = async () => {
  const result = await Yoga.findAll();
  return result;
};

const createNewYoga = async (obj) => {
  const result = await Yoga.create(obj);
  return result;
};

module.exports = {
  getYogas,
  createNewYoga,
};
