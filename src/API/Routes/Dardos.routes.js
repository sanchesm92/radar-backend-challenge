const express = require('express');
const {
  getDardo, postDardo, getDardosId, updateDardos,
} = require('../controller/Dardos.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const dardosRouter = express.Router();

dardosRouter.get('/', getDardo);
dardosRouter.get('/:id', getDardosId);
dardosRouter.post('/', validateInputs, postDardo);
dardosRouter.put('/:id', validateInputs, updateDardos);

module.exports = dardosRouter;
