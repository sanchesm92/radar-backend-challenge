const { Peso } = require('../../Database/models');

const getPesos = async () => {
  const result = await Peso.findAll({ raw: true });
  return result;
};

const createNewPeso = async (obj) => {
  const unidade = obj.unidade || 'cal';
  const result = await Peso.create({ ...obj, competicao: 'competição perda de peso', unidade });
  return result;
};

const getPesoById = async (id) => {
  const result = await Peso.findByPk(id);
  return result;
};

const updatePesoCompetition = async (id, obj) => {
  const result = await Peso.update(
    { ...obj },
    { where: { id } },
  );
  return result;
};

const destroyPeso = async (id) => {
  await Peso.destroy(
    { where: { id } },
  );
};

const getRankingPeso = async () => {
  const allItens = await getPesos();
  const unityConvert = allItens.map((person) => {
    if (person.unidade === 'kcal') {
      const value = Number(person.value) * 1000;
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
  getPesos,
  createNewPeso,
  updatePesoCompetition,
  getPesoById,
  destroyPeso,
  getRankingPeso,
};
