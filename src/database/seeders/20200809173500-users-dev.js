const usersDev = require('../seeds/20200809173500-users-dev');

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', usersDev),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
