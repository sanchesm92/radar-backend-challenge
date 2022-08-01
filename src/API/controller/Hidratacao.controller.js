const {
  getHidratacoes, createNewHidratacao,
  getHidratacaoById, updateHidratacaoCompetition, destroyHidratacao, getRankingHidratacao,
} = require('../services/Hidratacao.service');

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

const getHidratacaoId = async (req, res) => {
  try {
    const { id } = req.params;
    const hidratacao = await getHidratacaoById(id);
    return res.status(200).json(hidratacao);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateHidratacao = async (req, res) => {
  try {
    const { id } = req.params;
    await updateHidratacaoCompetition(id, req.body);
    return res.status(201).json({ status: 200, message: 'Updated' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteHidratacao = async (req, res) => {
  try {
    const { id } = req.params;
    await destroyHidratacao(id);
    return res.status(201).json({ status: 200, message: 'Deleted' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getHidratacaoRanking = async (req, res) => {
  try {
    let param = false;
    if (req.originalUrl.includes('finish')) {
      param = true;
    }
    const result = await getRankingHidratacao(param);
    return res.status(201).json({ status: 200, Ranking: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getHidratacao,
  postHidratacao,
  getHidratacaoId,
  updateHidratacao,
  deleteHidratacao,
  getHidratacaoRanking,
};
