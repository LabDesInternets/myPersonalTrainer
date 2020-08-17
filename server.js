require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressValidator = require('express-validator');

const routes = require('./src/routes');
require('./src/config/passport');
const { errorLogger, errorHandler } = require('./src/middlewares');

const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(expressValidator());

server.use(passport.initialize());
server.use(passport.session());
server.use(
  '/api',
  cors({
    exposedHeaders: ['Content-Length', 'xAuth']
  })
);

server.use('/api/images', express.static('src/assets'));
server.use('/api', routes);


server.use(errorLogger);


server.use(async (error, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(error);
  if (!isOperationalError) {
    next(error);
  }
});

process.on('unhandledRejection', (reason, p) => {
  // unhandled promise rejection => throw to let the fallback for unhandled errors (uncaughtException) handle it
  throw reason;
});

process.on('uncaughtException', (error) => {
  // error never handled => handle it and decide whether a restart is needed
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) process.exit(1);
});


module.exports = server;
