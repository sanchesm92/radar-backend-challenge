const express = require('express');
const {
  getYoga, postYoga, updateYoga, getYogaId,
} = require('../controller/Yoga.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const yogaRouter = express.Router();

yogaRouter.get('/', getYoga);
yogaRouter.get('/:id', getYogaId);
yogaRouter.post('/', validateInputs, postYoga);
yogaRouter.put('/:id', validateInputs, updateYoga);

module.exports = yogaRouter;
