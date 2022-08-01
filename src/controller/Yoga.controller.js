const { getYogas } = require('../services/Yoga.service');

const getYoga = async (_req, res) => {
  try {
    const yoga = await getYogas();
    return res.status(200).json(yoga);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getYoga,
};
