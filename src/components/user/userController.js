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
  }
};

module.exports = userController;
