const express = require('express');
const {
  getYoga, postYoga, updateYoga, getYogaId, deleteYoga, getYogaRanking,
} = require('../controller/Yoga.controller');
const { validateInputs } = require('../middlewares/Input.middleware');

const yogaRouter = express.Router();

yogaRouter.get('/', getYoga);
yogaRouter.get('/ranking', getYogaRanking);
yogaRouter.get('/:id', getYogaId);
yogaRouter.post('/', validateInputs, postYoga);
yogaRouter.put('/:id', validateInputs, updateYoga);
yogaRouter.delete('/:id', deleteYoga);

module.exports = yogaRouter;
