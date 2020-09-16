const { Article } = require('../../models');
const { AppError } = require('../../helpers/errors/appError');
const HttpStatusCode = require('../../helpers/status_code');


const blogController = {
  getAllArticles: async () => {
    const articles = await Article.findAll({
      attributes: ['id', 'slug', 'picture', 'title', 'description', 'title1', 'text1', 'picture1', 'title2', 'text2', 'picture2', 'title3', 'text3', 'picture3', 'title4', 'text4', 'picture4', 'title5', 'text5', 'picture5', 'date']
    });
    if (!articles) {
      throw new AppError('no content', HttpStatusCode.NO_CONTENT, 'no articles found in the db', true);
    }
    return articles;
  },

  getOneArticle: async (slug) => {
    const article = await Article.findOne({
      where: { slug },
      attributes: ['id', 'slug', 'picture', 'title', 'description', 'title1', 'text1', 'picture1', 'title2', 'text2', 'picture2', 'title3', 'text3', 'picture3', 'title4', 'text4', 'picture4', 'title5', 'text5', 'picture5', 'date']
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
