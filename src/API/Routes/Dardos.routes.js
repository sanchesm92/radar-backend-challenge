const express = require('express');
const { getDardo, postDardo } = require('../controller/Dardos.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const dardosRouter = express.Router();

dardosRouter.get('/', getDardo);
dardosRouter.post('/', validateInputs, postDardo);

module.exports = dardosRouter;
