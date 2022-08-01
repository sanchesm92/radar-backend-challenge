const { Dardos } = require('../../Database/models');

const getDardos = async () => {
  const result = await Dardos.findAll({ raw: true });
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

const getRankingDardos = async () => {
  const allItens = await getDardos();
  const unityConvert = allItens.map((person) => {
    if (person.unidade === 'cm') {
      const value = Number(person.value) * 0.01;
      return { ...person, value: `${value}` };
    }
    return { ...person };
  }).sort((a, b) => Number(b.value) - Number(a.value));
  const result = unityConvert.map(({ atleta }, index) => ({
    position: index + 1,
    atleta,
  }));
  return result;
};

module.exports = {
  getDardos,
  createNewDardos,
  updateDardosCompetition,
  getDardosById,
  destroyDardos,
  getRankingDardos,
};
