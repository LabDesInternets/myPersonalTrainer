/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Articles', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    slug: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(200)
    },
    picture: {
      allowNull: false,
      type: Sequelize.STRING(200)
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(200)
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    title1: {
      allowNull: true,
      type: Sequelize.STRING(200),
    },
    text1: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    picture1: {
      allowNull: true,
      type: Sequelize.STRING(200)
    },
    title2: {
      allowNull: true,
      type: Sequelize.STRING(200),
    },
    text2: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    picture2: {
      allowNull: true,
      type: Sequelize.STRING(200)
    },
    title3: {
      allowNull: true,
      type: Sequelize.STRING(200),
    },
    text3: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    picture3: {
      allowNull: true,
      type: Sequelize.STRING(200)
    },
    title4: {
      allowNull: true,
      type: Sequelize.STRING(200),
    },
    text4: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    picture4: {
      allowNull: true,
      type: Sequelize.STRING(200)
    },
    title5: {
      allowNull: true,
      type: Sequelize.STRING(200),
    },
    text5: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    picture5: {
      allowNull: true,
      type: Sequelize.STRING(200)
    },
    conclusion: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    date: {
      allowNull: false,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Articles')
};
