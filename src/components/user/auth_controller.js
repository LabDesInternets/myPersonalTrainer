const { Op } = require('sequelize');
const passport = require('passport');
const { User } = require('../../models');
const { AppError } = require('../../helpers/errors/appError');
const HttpStatusCode = require('../../helpers/status_code');


const authenticate = (req, res) => new Promise((resolve, reject) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err) reject(new Error(err));
    else if (!user) reject(new AppError('Unauthorized', HttpStatusCode.UNAUTHORIZED, 'No user found with these credentials', true));
    resolve(user);
  })(req, res);
});

const authController = {
  login: async (req) => {
    const user = await authenticate(req);
    const userInfo = {
      id: user.id,
      email: user.email
    };
    return userInfo;
  },
  logout: (request, response) => {
    request.logout();
    response.status(200).json({ message: 'you are now logged out !' });
  },
  checkToken: async (token) => {
    const user = await User.findOne({
      where: {
        [Op.and]: [
          { resetPasswordToken: token },
          { resetPasswordExpires: { [Op.gt]: Date.now() } }
        ]
      },
      attributes: ['id', 'email'],
      raw: true
    });
    if (user === null) {
      throw new AppError('Unauthorized', HttpStatusCode.UNAUTHORIZED, 'password reset token is invalid or has expired', true);
    }
    return user;
  }
};

module.exports = authController;
