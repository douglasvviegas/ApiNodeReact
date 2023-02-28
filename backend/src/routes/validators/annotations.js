const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

module.exports = {
  create: validator.body(Joi.object({
    notes: Joi.string(),
    title: Joi.string(),
    priority: Joi.boolean(),
  }).or('notes', 'title'))
}