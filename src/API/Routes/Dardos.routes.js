const express = require('express');
const {
  getAllDardos, postDardo, getDardosId, updateDardos, deleteDardos, getDardosRanking,
} = require('../controller/Dardos.controller');
const { validateInputs, validateInProgressDardos } = require('../middlewares/Input.middleware');

const dardosRouter = express.Router();

dardosRouter.get('/', getAllDardos);
dardosRouter.get('/ranking', validateInProgressDardos, getDardosRanking);
dardosRouter.get('/finish', getDardosRanking);
dardosRouter.get('/:id', getDardosId);
dardosRouter.post('/', validateInProgressDardos, validateInputs, postDardo);
dardosRouter.put('/:id', validateInProgressDardos, validateInputs, updateDardos);
dardosRouter.delete('/:id', deleteDardos);

module.exports = dardosRouter;
