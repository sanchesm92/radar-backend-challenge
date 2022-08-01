const {
  getDardos, createNewDardos,
  getDardosById, updateDardosCompetition, destroyDardos, getRankingDardos,
} = require('../services/Dardos.service');

const getAllDardos = async (_req, res) => {
  try {
    const dardos = await getDardos();
    return res.status(200).json(dardos);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const postDardo = async (req, res) => {
  try {
    const dardos = await createNewDardos(req.body);
    return res.status(201).json({ status: 201, message: 'Created', object: dardos });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getDardosId = async (req, res) => {
  try {
    const { id } = req.params;
    const hidratacao = await getDardosById(id);
    return res.status(200).json(hidratacao);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateDardos = async (req, res) => {
  try {
    const { id } = req.params;
    await updateDardosCompetition(id, req.body);
    return res.status(201).json({ status: 200, message: 'Updated' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteDardos = async (req, res) => {
  try {
    const { id } = req.params;
    await destroyDardos(id);
    return res.status(201).json({ status: 200, message: 'Deleted' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getDardosRanking = async (_req, res) => {
  try {
    const result = await getRankingDardos();
    return res.status(201).json({ status: 200, Ranking: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllDardos,
  postDardo,
  updateDardos,
  getDardosId,
  deleteDardos,
  getDardosRanking,
};
