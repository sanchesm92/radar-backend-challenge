const Joi = require('joi');

const validateInputs = (req, res, next) => {
  const { error } = Joi.object({
    atleta: Joi.string().required(),
    value: Joi.string().required(),
  }).validate(req.body);
  if (error) {
    next(error);
    return;
  }
  next();
};

module.exports = {
  validateInputs,
};
