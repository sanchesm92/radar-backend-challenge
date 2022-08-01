const express = require('express');
const {
  getHidratacao, postHidratacao, getHidratacaoId,
  updateHidratacao, deleteHidratacao, getHidratacaoRanking,
} = require('../controller/Hidratacao.controller');
const { validateInputs, validateInProgressHidratacao } = require('../middlewares/Input.middleware');

const hidratacaoRouter = express.Router();

hidratacaoRouter.get('/', getHidratacao);
hidratacaoRouter.get('/ranking', validateInProgressHidratacao, getHidratacaoRanking);
hidratacaoRouter.get('/finish', getHidratacaoRanking);
hidratacaoRouter.get('/:id', getHidratacaoId);
hidratacaoRouter.post('/', validateInProgressHidratacao, validateInputs, postHidratacao);
hidratacaoRouter.put('/:id', validateInProgressHidratacao, validateInputs, updateHidratacao);
hidratacaoRouter.delete('/:id', deleteHidratacao);

module.exports = hidratacaoRouter;
