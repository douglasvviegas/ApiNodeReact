const { createLogger, format, transports } = require('winston');

const isTest = process.env.NODE_ENV === 'test';

const instance = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: 'SERVER-APP' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
      ),
    }),
  ],
});

class Logger {
  static info(value) {
    return !isTest && instance.log('info', `[SERVER-APP] ${JSON.stringify(value)}`);
  }

  static warn(value) {
    return !isTest && instance.log('warn', `[SERVER-APP] ${JSON.stringify(value)}`);
  }

  static error(value) {
    return !isTest && instance.log('error', `[SERVER-APP] ${JSON.stringify(value)}`);
  }
}

module.exports = Logger;