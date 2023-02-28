const routes = require('express').Router();

const contentController = require('../app/controllers/contentController');
const contentValidator = require('./validators/content');

routes.patch('/contents/:id', contentValidator.update, contentController.update);

module.exports = routes;