const { getYogas, createNewYoga } = require('../services/Yoga.service');

const getYoga = async (_req, res) => {
  try {
    const yoga = await getYogas();
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

module.exports = {
  getYoga,
  postYoga,
};
