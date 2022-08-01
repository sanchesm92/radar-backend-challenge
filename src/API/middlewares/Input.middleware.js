const Joi = require('joi');
const { Status } = require('../../Database/models');
const { getDardos } = require('../services/Dardos.service');
const { getHidratacoes } = require('../services/Hidratacao.service');
const { getPesos } = require('../services/Peso.service');
const { getYogas } = require('../services/Yoga.service');

const validateInProgressYoga = async (req, res, next) => {
  try {
    const result = await Status.findAll({ raw: true });
    const allYogas = await getYogas();
    const pathName = req.originalUrl.split('/')[1];

    if (!allYogas[0] || result[0][pathName] === 'in progress') {
      next();
    } else {
      throw Error('Competição encerrada');
    }
  } catch (error) {
    next(error);
  }
};

const validateInProgressHidratacao = async (req, res, next) => {
  try {
    const result = await Status.findAll({ raw: true });
    const hidratacoes = await getHidratacoes();
    const pathName = req.originalUrl.split('/')[1];

    if (!hidratacoes[0] || result[0][pathName] === 'in progress') {
      next();
    } else {
      throw Error('Competição encerrada');
    }
  } catch (error) {
    next(error);
  }
};

const validateInProgressPesos = async (req, res, next) => {
  try {
    const result = await Status.findAll({ raw: true });
    const pesos = await getPesos();
    const pathName = req.originalUrl.split('/')[1];

    if (!pesos[0] || result[0][pathName] === 'in progress') {
      next();
    } else {
      throw Error('Competição encerrada');
    }
  } catch (error) {
    next(error);
  }
};

const validateInProgressDardos = async (req, res, next) => {
  try {
    const result = await Status.findAll({ raw: true });
    const dardos = await getDardos();
    const pathName = req.originalUrl.split('/')[1];

    if (!dardos[0] || result[0][pathName] === 'in progress') {
      next();
    } else {
      throw Error('Competição encerrada');
    }
  } catch (error) {
    next(error);
  }
};

const validateInputs = (req, res, next) => {
  const { error } = Joi.object({
    atleta: Joi.string().required(),
    value: Joi.string().required(),
    unidade: Joi.string(),
  }).validate(req.body);
  if (error) {
    next(error);
    return;
  }
  next();
};

module.exports = {
  validateInputs,
  validateInProgressYoga,
  validateInProgressHidratacao,
  validateInProgressPesos,
  validateInProgressDardos,
};
