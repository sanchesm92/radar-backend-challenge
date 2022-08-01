const express = require('express');
const { getYoga } = require('../controller/Yoga.controller');

const yogaRouter = express.Router();

yogaRouter.get('/', getYoga);

module.exports = yogaRouter;
