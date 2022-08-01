const {
  getYogas, createNewYoga,
  updateYogaCompetition, getYogaById, destroyYoga, getRankingYoga,
} = require('../services/Yoga.service');

const getYoga = async (_req, res) => {
  try {
    const yoga = await getYogas();
    return res.status(200).json(yoga);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getYogaId = async (req, res) => {
  try {
    const { id } = req.params;
    const yoga = await getYogaById(id);
    return res.status(200).json(yoga);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const postYoga = async (req, res) => {
  try {
    const yoga = await createNewYoga(req.body);
    return res.status(201).json({ status: 201, message: 'Created', object: yoga });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateYoga = async (req, res) => {
  try {
    const { id } = req.params;
    await updateYogaCompetition(id, req.body);
    return res.status(201).json({ status: 200, message: 'Updated' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteYoga = async (req, res) => {
  try {
    const { id } = req.params;
    await destroyYoga(id);
    return res.status(201).json({ status: 200, message: 'Deleted' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getYogaRanking = async (req, res) => {
  try {
    let param = false;
    if (req.originalUrl.includes('finish')) {
      param = true;
    }
    const result = await getRankingYoga(param);
    return res.status(201).json({ status: 200, Ranking: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getYoga,
  postYoga,
  updateYoga,
  getYogaId,
  deleteYoga,
  getYogaRanking,
};
