const { getDardos } = require('../services/Dardos.service');

const getDardo = async (_req, res) => {
  try {
    const category = await getDardos();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getDardo,
};
