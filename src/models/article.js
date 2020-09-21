const SequelizeSlugify = require('sequelize-slugify');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      slug: {
        type: DataTypes.STRING(200),
        unique: true,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      title1: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      text1: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      picture1: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      title2: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      text2: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      picture2: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      title3: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      text3: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      picture3: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      title4: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      text4: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      picture4: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      title5: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      text5: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      picture5: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      conclusion: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue('date');
          return moment(rawValue).format('DD/MM/YYYY');
        }
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      }
    },
    {
      tableName: 'Articles'
    }
  );
  SequelizeSlugify.slugifyModel(Article, {
    source: ['title']
  });
  return Article;
};
