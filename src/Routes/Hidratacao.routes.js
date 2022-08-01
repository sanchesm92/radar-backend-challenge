const express = require('express');
const { getYoga } = require('../controller/Yoga.controller');

const hidratacaoRouter = express.Router();

hidratacaoRouter.get('/', getYoga);

module.exports = hidratacaoRouter;
