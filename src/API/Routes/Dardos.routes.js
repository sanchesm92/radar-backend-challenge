const express = require('express');
const {
  getAllDardos, postDardo, getDardosId, updateDardos, deleteDardos,
} = require('../controller/Dardos.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const dardosRouter = express.Router();

dardosRouter.get('/', getAllDardos);
dardosRouter.get('/:id', getDardosId);
dardosRouter.post('/', validateInputs, postDardo);
dardosRouter.put('/:id', validateInputs, updateDardos);
dardosRouter.delete('/:id', deleteDardos);

module.exports = dardosRouter;
