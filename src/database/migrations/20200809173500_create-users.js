/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(40)
    },
    password: {
      allowNull: true,
      type: Sequelize.STRING(150)
    },
    role: {
      allowNull: false,
      type: Sequelize.STRING(40)
    },
    resetPasswordToken: {
      allowNull: true,
      type: Sequelize.STRING(100)
    },
    resetPasswordExpires: {
      allowNull: true,
      type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
