const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

module.exports = {
  update: validator.body(Joi.object({
    notes: Joi.string().required(),
  }))
}