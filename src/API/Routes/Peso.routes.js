const express = require('express');
const {
  postPeso, getPeso, getPesoId, updatePeso, deletePeso, getPesoRanking,
} = require('../controller/Peso.controller');
const { validateInputs, validateInProgressPesos } = require('../middlewares/Input.middleware');

const pesoRouter = express.Router();

pesoRouter.get('/', getPeso);
pesoRouter.get('/ranking', validateInProgressPesos, getPesoRanking);
pesoRouter.get('/finish', getPesoRanking);
pesoRouter.get('/:id', getPesoId);
pesoRouter.post('/', validateInProgressPesos, validateInputs, postPeso);
pesoRouter.put('/:id', validateInProgressPesos, validateInputs, updatePeso);
pesoRouter.delete('/:id', deletePeso);

module.exports = pesoRouter;
