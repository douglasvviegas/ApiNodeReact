const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const logger = require('./utils/logger');

dotenv.config();

class Server {
  constructor() {
    this.express = express();
    this.database = require('./config/mongo');
    this.initialConfigs();
  }

  async initialConfigs() {
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

  exceptionHandler() {
    this.express.use((err, req, res, next) => {
      const { status, data, errors } = err;
      
      if (!status) {
        logger.error(`An unexpected error occurred: ${err.stack || err.message || err}`)
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      return res.status(status).json(data || errors);
    });
  }
}

module.exports = new Server().express;