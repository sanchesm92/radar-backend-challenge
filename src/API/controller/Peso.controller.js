const {
  getPesos, createNewPeso, updatePesoCompetition, getPesoById, destroyPeso, getRankingPeso,
} = require('../services/Peso.service');

const getPeso = async (_req, res) => {
  try {
    const peso = await getPesos();
    return res.status(200).json(peso);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const getPesoId = async (req, res) => {
  try {
    const { id } = req.params;
    const peso = await getPesoById(id);
    return res.status(200).json(peso);
  } catch (error) {
    return res.status(400).json({ message: error.message });
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

const updatePeso = async (req, res) => {
  try {
    const { id } = req.params;
    await updatePesoCompetition(id, req.body);
    return res.status(201).json({ status: 200, message: 'Updated' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deletePeso = async (req, res) => {
  try {
    const { id } = req.params;
    await destroyPeso(id);
    return res.status(204).json({ status: 200, message: 'Deleted' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getPesoRanking = async (req, res) => {
  try {
    let param = false;
    if (req.originalUrl.includes('finish')) {
      param = true;
    }
    const result = await getRankingPeso(param);
    return res.status(201).json({ status: 200, Ranking: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPeso,
  postPeso,
  updatePeso,
  getPesoId,
  deletePeso,
  getPesoRanking,
};
