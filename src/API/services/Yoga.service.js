const { Yoga, Status } = require('../../Database/models');

const getYogas = async () => {
  const result = await Yoga.findAll({ raw: true });
  return result;
};

const createOrUpdateStatus = async () => {
  const result = await Status.findAll({ raw: true });
  if (result[0]) {
    await Status.update({ yoga: 'in progress' }, { where: { id: 1 } });
  } else {
    await Status.create({
      yoga: 'in progress', peso: 'finish', hidratacao: 'finish', dardos: 'finish',
    });
  }
};

const convertToNumber = (value, unidade) => {
  let result = 0;
  if (unidade === 'm') {
    result = Number(value) * 60;
  } else {
    result = Number(value);
  }
  return result;
};

const validatePost = (current, updated) => {
  const currentValue = convertToNumber(current.value, current.unidade);
  const updatedValue = convertToNumber(updated.value, updated.unidade);
  if (currentValue > updatedValue) {
    return true;
  }
  return false;
};

const createNewYoga = async (obj) => {
  createOrUpdateStatus();
  const unidade = obj.unidade || 's';
  const findObj = await Yoga.findOne({ where: { atleta: obj.atleta } });
  if (findObj) {
    if (validatePost(findObj, obj)) {
      return findObj;
    }
    const result = await Yoga.update(
      { ...obj },
      { where: { atleta: obj.atleta } },
    );
    return result;
  }
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

const getRankingYoga = async (finish) => {
  if (finish) {
    await Status.update({ yoga: 'finish' }, { where: { id: 1 } });
  }
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
