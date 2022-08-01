const express = require('express');
const {
  getAllDardos, postDardo, getDardosId, updateDardos, deleteDardos, getDardosRanking,
} = require('../controller/Dardos.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const dardosRouter = express.Router();

dardosRouter.get('/', getAllDardos);
dardosRouter.get('/ranking', getDardosRanking);
dardosRouter.get('/:id', getDardosId);
dardosRouter.post('/', validateInputs, postDardo);
dardosRouter.put('/:id', validateInputs, updateDardos);
dardosRouter.delete('/:id', deleteDardos);

module.exports = dardosRouter;
