const express = require('express');
const {
  getHidratacao, postHidratacao, getHidratacaoId, updateHidratacao,
} = require('../controller/Hidratacao.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const hidratacaoRouter = express.Router();

hidratacaoRouter.get('/', getHidratacao);
hidratacaoRouter.get('/:id', getHidratacaoId);
hidratacaoRouter.post('/', validateInputs, postHidratacao);
hidratacaoRouter.put('/:id', validateInputs, updateHidratacao);

module.exports = hidratacaoRouter;
