const routes = require('express').Router();

const priorityController = require('../app/controllers/priorityController');

routes.get('/priorities', priorityController.read);
routes.patch('/priorities/:id', priorityController.update);

module.exports = routes;