const routes = require('express').Router();

const annotation = require('./annotations');
const priority = require('./priority');
const content = require('./content');

routes.use(annotation);
routes.use(priority);
routes.use(content);

module.exports = routes;