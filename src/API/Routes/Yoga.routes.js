const express = require('express');
const { getYoga, postYoga } = require('../controller/Yoga.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const yogaRouter = express.Router();

yogaRouter.get('/', getYoga);
yogaRouter.post('/', validateInputs, postYoga);

module.exports = yogaRouter;
