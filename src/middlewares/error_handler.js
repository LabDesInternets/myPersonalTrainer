const determineIfOperationalError = require('../helpers/errors/is_it_operational_error');
const errorLogger = require('./error_logger');

function ErrorHandler() {
  this.handleError = async (error) => {
    await errorLogger(error);
    await determineIfOperationalError(error);
  };

  this.isTrustedError = (error) => error.isOperational;
}
module.exports = new ErrorHandler();
