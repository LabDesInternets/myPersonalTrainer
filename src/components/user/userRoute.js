const express = require('express');
const {
  getAllUsers, validateSignup, checkAccount, signupOneUser
} = require('./userController');
const { logout, login } = require('./auth_controller');
const authController = require('./auth_controller');
const { authenticate } = require('../../middlewares');
const logger = require('../../helpers/logger');
const { OK, CREATED } = require('../../helpers/status_code');


const userRouter = express.Router();


userRouter.get('/', async (request, response) => {
  const articles = await getAllUsers();

  response.status(OK).json(articles);
});

userRouter.post('/register', validateSignup, checkAccount, async (request, response) => {
  const data = request.body;
  const createdUser = await signupOneUser(data);
  const userInfo = await authController.login(request);
  const token = authenticate.generateAuthToken(userInfo);

  response
    .status(201)
    .header('x-auth', token)
    .json({ createdUser, userInfo, message: 'you are now logged in ! ' });
});

userRouter.post('/login', async (request, response) => {
  try {
    const userInfo = await login(request);
    const token = authenticate.generateAuthToken(userInfo);

    response
      .status(200)
      .header('xAuth', token)
      .json({ userInfo, message: 'you are now logged in ! ' });
  } catch (err) {
    console.log('oooops => ', err);
  }
});

userRouter.get('/logout', logout);


module.exports = userRouter;
