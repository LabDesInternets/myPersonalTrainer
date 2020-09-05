require('dotenv').config();
const express = require('express');
const path = require('path');
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
server.use('/api/src/assets', express.static('src/assets'));
server.use('/api', routes);
server.use('/api', cors({ exposedHeaders: ['Content-Length', 'xAuth'] }));

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   server.use(express.static(path.join(__dirname, 'client/build')));
//   // Handle React routing, return all requests to React app
//   server.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

server.get('/', (req, res) => {
  res.send('it is oooonnnnnnnnn')
});

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
  //if (!errorHandler.isTrustedError(error)) process.exit(1);
});


module.exports = server;
