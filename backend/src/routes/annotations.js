const routes = require('express').Router();

const annotationController = require('../app/controllers/annotationController');
const annotationValidator = require('./validators/annotations');

routes.post('/annotations', annotationValidator.create, annotationController.create);
routes.get('/annotations', annotationController.read);
routes.delete('/annotations/:id', annotationController.delete);

module.exports = routes;