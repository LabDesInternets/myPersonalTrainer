/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Articles', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(200)
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    text: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    picture: {
      allowNull: false,
      type: Sequelize.STRING(200)
    },
    date: {
      allowNull: false,
      type: Sequelize.STRING(10)
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Articles')
};
