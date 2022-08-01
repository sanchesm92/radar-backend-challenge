const express = require('express');
const {
  getHidratacao, postHidratacao, getHidratacaoId,
  updateHidratacao, deleteHidratacao, getHidratacaoRanking,
} = require('../controller/Hidratacao.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const hidratacaoRouter = express.Router();

hidratacaoRouter.get('/', getHidratacao);
hidratacaoRouter.get('/ranking', getHidratacaoRanking);
hidratacaoRouter.get('/:id', getHidratacaoId);
hidratacaoRouter.post('/', validateInputs, postHidratacao);
hidratacaoRouter.put('/:id', validateInputs, updateHidratacao);
hidratacaoRouter.delete('/:id', deleteHidratacao);

module.exports = hidratacaoRouter;
