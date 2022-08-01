const express = require('express');
const { getYoga } = require('../controller/Yoga.controller');

const pesoRouter = express.Router();

pesoRouter.get('/', getYoga);

module.exports = pesoRouter;
