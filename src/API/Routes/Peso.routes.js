const express = require('express');
const {
  postPeso, getPeso, getPesoId, updatePeso,
} = require('../controller/Peso.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const pesoRouter = express.Router();

pesoRouter.get('/', getPeso);
pesoRouter.get('/:id', getPesoId);
pesoRouter.post('/', validateInputs, postPeso);
pesoRouter.put('/:id', validateInputs, updatePeso);

module.exports = pesoRouter;
