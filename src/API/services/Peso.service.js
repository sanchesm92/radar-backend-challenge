const { Peso, Status } = require('../../Database/models');

const createOrUpdateStatus = async () => {
  const result = await Status.findAll({ raw: true });
  if (result[0]) {
    await Status.update({ peso: 'in progress' }, { where: { id: 1 } });
  } else {
    await Status.create({
      peso: 'in progress', yoga: 'finish', hidratacao: 'finish', dardos: 'finish',
    });
  }
};

const getPesos = async () => {
  const result = await Peso.findAll({ raw: true });
  return result;
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

const createNewPeso = async (obj) => {
  createOrUpdateStatus();
  const unidade = obj.unidade || 'cal';
  const findObj = await Peso.findOne({ where: { atleta: obj.atleta } });
  if (findObj) {
    if (validatePost(findObj, obj)) {
      return findObj;
    }
    const result = await Peso.update(
      { ...obj },
      { where: { atleta: obj.atleta } },
    );
    return result;
  }
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

const getRankingPeso = async (finish) => {
  if (finish) {
    await Status.update({ peso: 'finish' }, { where: { id: 1 } });
  }
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
