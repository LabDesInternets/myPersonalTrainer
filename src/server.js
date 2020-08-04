const express = require('express');
const bodyParser = require('body-parser');


const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/images', express.static('src/assets'));


module.exports = server;
