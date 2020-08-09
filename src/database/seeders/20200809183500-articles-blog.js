const articlesBlog = require('../seeds/20200809183500-articles-blog');

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Articles', articlesBlog),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Articles', null, {})
};
