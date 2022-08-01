const { getPesos, createNewPeso } = require('../services/Peso.service');

const getPeso = async (_req, res) => {
  try {
    const peso = await getPesos();
    return res.status(200).json(peso);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
const postPeso = async (req, res) => {
  try {
    const peso = await createNewPeso(req.body);
    return res.status(201).json({ status: 201, message: 'Created', object: peso });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPeso,
  postPeso,
};
