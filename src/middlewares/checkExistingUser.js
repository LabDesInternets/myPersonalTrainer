const { Op } = require('sequelize');
const { User } = require('../models');

const checkExistingUser = async (request, response, next) => {
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
  request.userId = user.id;
  if (user === null) {
    response
      .status(400)
      .json({ msg: 'No user account exists with this email' });
    return;
  }
  next();
};

module.exports = checkExistingUser;
