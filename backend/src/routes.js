const express = require('express');
const routes = express.Router();

const annotationController = require('./controllers/annotationConstroller');
const priorityController = require('./controllers/priorityController');
const contentController = require('./controllers/contentController');

//Rotas annotations
routes.post('/annotations', annotationController.create);
routes.get('/annotations', annotationController.read);
routes.delete('/annotations/:id', annotationController.delete);

//Rota Priority
routes.get('/priorities', priorityController.read);
routes.post('/priorities/:id', priorityController.update);

//Rota Contents
routes.post('/contents/:id', contentController.update);

module.exports = routes;