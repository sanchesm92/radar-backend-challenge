const { getHidratacoes } = require('../services/Hidratacao.service');

const getHidratacao = async (_req, res) => {
  try {
    const category = await getHidratacoes();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getHidratacao,
};
