const { Peso } = require('../../Database/models');

const getPesos = async () => {
  const result = await Peso.findAll();
  return result;
};

const getPesoById = async (id) => {
  const result = await Peso.findByPk(id);
  return result;
};

const createNewPeso = async (obj) => {
  const unidade = obj.unidade || 'cal';
  const result = await Peso.create({ ...obj, competicao: 'competição perda de peso', unidade });
  return result;
};

const updatePesoCompetition = async (id, obj) => {
  const result = await Peso.update(
    { ...obj },
    { where: { id } },
  );
  return result;
};

module.exports = {
  getPesos,
  createNewPeso,
  updatePesoCompetition,
  getPesoById,
};
