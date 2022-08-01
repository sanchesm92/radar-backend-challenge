const { Dardos, Status } = require('../../Database/models');

const createOrUpdateStatus = async () => {
  const result = await Status.findAll({ raw: true });
  if (result[0]) {
    await Status.update({ dardos: 'in progress' }, { where: { id: 1 } });
  } else {
    await Status.create({
      dardos: 'in progress', yoga: 'finish', peso: 'finish', hidratacao: 'finish',
    });
  }
};

const getDardos = async () => {
  const result = await Dardos.findAll({ raw: true });
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

const createNewDardos = async (obj) => {
  createOrUpdateStatus();
  const unidade = obj.unidade || 'm';
  const findObj = await Dardos.findOne({ where: { atleta: obj.atleta } });
  if (findObj) {
    if (validatePost(findObj, obj)) {
      return findObj;
    }
    const result = await Dardos.update(
      { ...obj },
      { where: { atleta: obj.atleta } },
    );
    return result;
  }
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

const getRankingDardos = async (finish) => {
  if (finish) {
    await Status.update({ dardos: 'finish' }, { where: { id: 1 } });
  }
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
