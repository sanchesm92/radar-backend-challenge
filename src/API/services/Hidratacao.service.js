const { Hidratacao, Status } = require('../../Database/models');

const createOrUpdateStatus = async () => {
  const result = await Status.findAll({ raw: true });
  if (result[0]) {
    await Status.update({ hidratacao: 'in progress' }, { where: { id: 1 } });
  } else {
    await Status.create({
      hidratacao: 'in progress', yoga: 'finish', peso: 'finish', dardos: 'finish',
    });
  }
};

const getHidratacoes = async () => {
  const result = await Hidratacao.findAll({ raw: true });
  return result;
};

const createNewHidratacao = async (obj) => {
  createOrUpdateStatus();
  const unidade = obj.unidade || 'l';
  const result = await Hidratacao.create({ ...obj, competicao: 'competição hidratacao', unidade });
  return result;
};

const getHidratacaoById = async (id) => {
  const result = await Hidratacao.findByPk(id);
  return result;
};

const updateHidratacaoCompetition = async (id, obj) => {
  const result = await Hidratacao.update(
    { ...obj },
    { where: { id } },
  );
  return result;
};

const destroyHidratacao = async (id) => {
  await Hidratacao.destroy(
    { where: { id } },
  );
};

const getRankingHidratacao = async (finish) => {
  if (finish) {
    await Status.update({ hidratacao: 'finish' }, { where: { id: 1 } });
  }
  const allItens = await getHidratacoes();
  const unityConvert = allItens.map((person) => {
    if (person.unidade === 'ml') {
      const value = Number(person.value) * 0.001;
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
  getHidratacoes,
  getHidratacaoById,
  updateHidratacaoCompetition,
  createNewHidratacao,
  destroyHidratacao,
  getRankingHidratacao,
};
