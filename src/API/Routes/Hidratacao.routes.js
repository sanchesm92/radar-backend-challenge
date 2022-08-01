const express = require('express');
const { getHidratacao, postHidratacao } = require('../controller/Hidratacao.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const hidratacaoRouter = express.Router();

hidratacaoRouter.get('/', getHidratacao);
hidratacaoRouter.post('/', validateInputs, postHidratacao);

module.exports = hidratacaoRouter;
