const { Yoga } = require('../../Database/models');

const getYogas = async () => {
  const result = await Yoga.findAll();
  return result;
};

const createNewYoga = async (obj) => {
  const unidade = obj.unidade || 's';
  const result = await Yoga.create({ ...obj, competicao: 'competição yoga', unidade });
  return result;
};

const getYogaById = async (id) => {
  const result = await Yoga.findByPk(id);
  return result;
};

const updateYogaCompetition = async (id, obj) => {
  const result = await Yoga.update(
    { ...obj },
    { where: { id } },
  );
  return result;
};

module.exports = {
  getYogas,
  createNewYoga,
  updateYogaCompetition,
  getYogaById,
};
