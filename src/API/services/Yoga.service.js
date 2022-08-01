const { Yoga } = require('../../Database/models');

const getYogas = async () => {
  const result = await Yoga.findAll({ raw: true });
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

const destroyYoga = async (id) => {
  await Yoga.destroy(
    { where: { id } },
  );
};

const getRankingYoga = async () => {
  const allYogas = await getYogas();
  const unityConvert = allYogas.map((person) => {
    if (person.unidade === 'm') {
      const value = Number(person.value) * 60;
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
  getYogas,
  createNewYoga,
  updateYogaCompetition,
  getYogaById,
  destroyYoga,
  getRankingYoga,
};
