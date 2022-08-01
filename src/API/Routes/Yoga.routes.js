const express = require('express');
const {
  getYoga, postYoga, updateYoga, getYogaId, deleteYoga, getYogaRanking,
} = require('../controller/Yoga.controller');
const { validateInputs, validateInProgressYoga } = require('../middlewares/Input.middleware');

const yogaRouter = express.Router();

yogaRouter.get('/', getYoga);
yogaRouter.get('/ranking', validateInProgressYoga, getYogaRanking);
yogaRouter.get('/finish', getYogaRanking);
yogaRouter.get('/:id', getYogaId);
yogaRouter.post('/', validateInProgressYoga, validateInputs, postYoga);
yogaRouter.put('/:id', validateInProgressYoga, validateInputs, updateYoga);
yogaRouter.delete('/:id', deleteYoga);

module.exports = yogaRouter;
