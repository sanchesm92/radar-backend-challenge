const { getHidratacoes, createNewHidratacao } = require('../services/Hidratacao.service');

const getHidratacao = async (_req, res) => {
  try {
    const hidratacao = await getHidratacoes();
    return res.status(200).json(hidratacao);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const postHidratacao = async (req, res) => {
  try {
    const hidratacao = await createNewHidratacao(req.body);
    return res.status(201).json({ status: 201, message: 'Created', object: hidratacao });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getHidratacao,
  postHidratacao,
};
