const express = require('express');
const routes = express.Router();

const annotationController = require('./controllers/annotationConstroller');

//Rotas annotations
routes.get('/annotations', annotationController.create);

module.exports = routes;