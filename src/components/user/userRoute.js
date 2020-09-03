const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const {
  getAllUsers, validateSignup, checkAccount, signupOneUser, updateUserData
} = require('./userController');
const { logout, login } = require('./auth_controller');
const authController = require('./auth_controller');
const { authenticate } = require('../../middlewares');
const { checkExistingUser } = require('../../middlewares');
const logger = require('../../helpers/logger');
const { OK, CREATED } = require('../../helpers/status_code');
const userController = require('./userController');
const contactController = require('../contact/contactController');


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

userRouter.post('/login', async (request, response, next) => {
  try {
    const userInfo = await login(request);
    const token = authenticate.generateAuthToken(userInfo);

    response
      .status(200)
      .header('xAuth', token)
      .json({ userInfo, message: 'you are now logged in ! ' });
  } catch (error) {
    console.log('ooops => ', error);
  }
});

userRouter.post('/forgot-password', checkExistingUser, async (request, response) => {
  const { email } = request.body;
  const { userId } = request;
  try {
    const resetPasswordToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordExpires = Date.now() + 3600000;

    const data = {
      userId, email, resetPasswordToken, resetPasswordExpires
    };
    await userController.updateUserData(data);

    const result = await contactController.sendMailToUser(data, request);

    response
      .status(200)
      .json({ message: `an email with further instruction to reset password has been sent to ${email}` });
  } catch (err) {
    console.log('oooops => ', err);
  }
});

userRouter.post('/reset-password/:userId/:token', async (request, response) => {
  const { userId, token } = request.params;
  const { password } = request.body;

  const data = { userId, password };
  const user = await authController.checkToken(token);

  if (user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    data.password = hashedPassword;
    await updateUserData(data);
  }
});

userRouter.get('/logout', logout);


module.exports = userRouter;
