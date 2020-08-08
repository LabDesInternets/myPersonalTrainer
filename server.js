const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
require('dotenv').config();

const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', routes);
server.use('/api/images', express.static('src/assets'));


module.exports = server;
