const { Dardos } = require('../../Database/models');

const getDardos = async () => {
  const result = await Dardos.findAll();
  return result;
};

const createNewDardos = async (obj) => {
  const unidade = obj.unidade || 'm';
  const result = await Dardos.create({ ...obj, competicao: 'competição dardos', unidade });
  return result;
};

const getDardosById = async (id) => {
  const result = await Dardos.findByPk(id);
  return result;
};

const updateDardosCompetition = async (id, obj) => {
  const result = await Dardos.update(
    { ...obj },
    { where: { id } },
  );
  return result;
};

const destroyDardos = async (id) => {
  await Dardos.destroy(
    { where: { id } },
  );
};

module.exports = {
  getDardos,
  createNewDardos,
  updateDardosCompetition,
  getDardosById,
  destroyDardos,
};
