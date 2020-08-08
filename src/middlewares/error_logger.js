const logger = require('../helpers/logger');

const errorLogger = (error, request, response, next) => {
  logger.error(
    `${error.httpCode || 500} - ${error.name} - ${error.description} - ${request.method} - ${request.originalUrl}  - ${request.ip}`
  );
  logger.error(`${error.stack}`);
  next(error);
};


module.exports = errorLogger;
