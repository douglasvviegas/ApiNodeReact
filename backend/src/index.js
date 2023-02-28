const server = require('./server');

const logger = require('./utils/logger');

server.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`)
});