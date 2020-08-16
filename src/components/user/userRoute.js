const express = require('express');
const userController = require('./userController');
const logger = require('../../helpers/logger');
const { OK, CREATED } = require('../../helpers/status_code');


const userRouter = express.Router();


userRouter.get('/', async (request, response) => {
  const articles = await userController.getAllUsers();

  response.status(OK).json(articles);
});


module.exports = userRouter;