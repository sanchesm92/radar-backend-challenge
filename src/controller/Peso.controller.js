const { getPesos } = require('../services/Peso.service');

const getPeso = async (_req, res) => {
  try {
    const category = await getPesos();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getPeso,
};
