const express = require('express');
const { postPeso, getPeso } = require('../controller/Peso.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const pesoRouter = express.Router();

pesoRouter.get('/', getPeso);
pesoRouter.post('/', validateInputs, postPeso);

module.exports = pesoRouter;
