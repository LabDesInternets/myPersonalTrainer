const express = require('express');
const blogController = require('./blogController');
const logger = require('../../helpers/logger');
const { OK, CREATED } = require('../../helpers/status_code');


const blogRouter = express.Router();


blogRouter.get('/articles', async (request, response) => {
  const articles = await blogController.getAllArticles();

  response.status(OK).json(articles);
});


blogRouter.get('/articles/:id', async (request, response, next) => {
  const { id } = request.params;
  try {
    const article = await blogController.getOneArticle(id);
    response.status(OK).json({ article, message: 'This is the article requested! ' });
  } catch (err) {
    next(err);
  }
});


blogRouter.post('/articles/add', async (request, response) => {
  const data = request.body;
  const createdArticle = await blogController.addArticle(data);

  response.status(CREATED).json({ createdArticle, message: 'Your article has been added! ' });
});

blogRouter.put('/articles/edit/:id', async (request, response) => {
  const { id } = request.params;
  const dataToUpdate = request.body;
  const [numberOfAffectedRows, affectedRows] = await blogController.updateArticle(id, dataToUpdate);
  response.status(OK).json({ numberOfAffectedRows, affectedRows, message: 'The article has been updated !' });

});

blogRouter.delete('/articles/delete/:id', async (request, response) => {
  const idToDelete = request.params.id;
  logger.info(`Remove article ${idToDelete} from the database`);
  const numOfRowsDeleted = await blogController.deleteArticle(idToDelete);
  response.status(OK).json({ numOfRowsDeleted, message: 'This article has been deleted from the database !' });
});


module.exports = blogRouter;
