const { getDardos, createNewDardos } = require('../services/Dardos.service');

const getDardo = async (_req, res) => {
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

module.exports = {
  getDardo,
  postDardo,
};
