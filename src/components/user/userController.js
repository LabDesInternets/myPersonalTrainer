const { Op } = require('sequelize');
const { User } = require('../../models');
const { AppError } = require('../../helpers/errors/appError');
const HttpStatusCode = require('../../helpers/status_code');


const userController = {
  getAllUsers: async () => {
    const users = await User.findAll({
      attributes: ['id', 'email', 'role'],
      raw: true
    });
    if (!users) {
      throw new AppError('no content', HttpStatusCode.NO_CONTENT, 'no users found in the db', true);
    }
    return users;
  },
  validateSignup: (request, response, next) => {
    request.checkBody('email', "Cet adresse mail n'est pas valide !").isEmail();
    request.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
    });
    request
      .checkBody('password', 'Vous devez renseigner un mot de passe !')
      .notEmpty();
    request
      .checkBody(
        'passwordConfirm',
        'Oops ! Les mots de passe saisis ne sont pas identiques'
      )
      .equals(request.body.password);
    const errors = request.validationErrors();
    if (errors) {
      response.status(400).json(errors.map((error) => error.msg));
      return;
    }
    next();
  },
  checkAccount: async (request, response, next) => {
    const { email } = request.body;
    const user = await User.findOne({
      where: {
        email: {
          [Op.eq]: email
        }
      },
      attributes: ['id', 'email'],
      raw: true
    });
    if (user !== null) {
      response
        .status(400)
        .json({ msg: 'A user account already exist with this email' });
      return;
    }
    next();
  },
  signupOneUser: async (newUser) => {
    const createdUser = await User.create(newUser);
    return createdUser;
  }
};

module.exports = userController;
