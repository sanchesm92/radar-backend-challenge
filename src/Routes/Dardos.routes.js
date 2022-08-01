const express = require('express');
const { getYoga } = require('../controller/Yoga.controller');

const dardosRouter = express.Router();

dardosRouter.get('/', getYoga);

module.exports = dardosRouter;
