const { Hidratacao } = require('../../Database/models');

const getHidratacoes = async () => {
  const result = await Hidratacao.findAll();
  return result;
};

const createNewHidratacao = async (obj) => {
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

module.exports = {
  getHidratacoes,
  getHidratacaoById,
  updateHidratacaoCompetition,
  createNewHidratacao,
  destroyHidratacao,
};
