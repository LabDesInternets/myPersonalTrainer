const { Article } = require('../../models');
const { AppError } = require('../../helpers/errors/appError');
const HttpStatusCode = require('../../helpers/status_code');


const blogController = {
  getAllArticles: async () => {
    const articles = await Article.findAll({
      attributes: ['id', 'title', 'description', 'text', 'picture', 'date'],
      raw: true
    });
    if (!articles) {
      throw new AppError('no content', HttpStatusCode.NO_CONTENT, 'no articles found in the db', true);
    }
    return articles;
  },

  getOneArticle: async (id) => {
    const article = await Article.findByPk(id, {
      attributes: [
        'id',
        'title',
        'description',
        'text',
        'picture',
        'date'
      ],
      raw: true
    });
    if (!article) {
      throw new AppError(
        'NOT FOUND',
        HttpStatusCode.NOT_FOUND,
        `No wine were found with this id : ${id}`,
        true
      );
    }
    return article;
  },
  addArticle: async (newArticle) => {
    const createdArticle = await Article.create(newArticle);
    return createdArticle;
  },
  updateArticle: async (idToUpdate, dataToUpdate) => {
    const [numberOfAffectedRows, affectedRows] = await Article.update(
      dataToUpdate,
      {
        where: { id: idToUpdate },
        returning: true
      }
    );
    return [numberOfAffectedRows, affectedRows];
  },
  deleteArticle: async (idToDelete) => {
    const numOfRowsAffected = await Article.destroy({
      where: {
        id: idToDelete
      }
    });
    return numOfRowsAffected;
  }
};

module.exports = blogController;
