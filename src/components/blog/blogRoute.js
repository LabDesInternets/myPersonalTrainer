const express = require('express');
const multer = require('multer');
const blogController = require('./blogController');
const logger = require('../../helpers/logger');
const { OK, CREATED } = require('../../helpers/status_code');


const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, './src/assets/blog/');
  },
  filename: (request, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (request, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // accept the file = store the file
  } else {
    cb(null, false); // reject/ignore the file  => does not throw an error
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // up to 5MB max
  },
  fileFilter
});

const blogRouter = express.Router();


blogRouter.get('/articles', async (request, response) => {
  const articles = await blogController.getAllArticles();

  response.status(OK).json(articles);
});


blogRouter.get('/articles/:id', async (request, response, next) => {
  const { id } = request.params;
  try {
    const article = await blogController.getOneArticle(id);
    response.status(OK).json(article);
  } catch (err) {
    next(err);
  }
});


blogRouter.post('/articles/add', upload.single('articleImage'), async (request, response, next) => {
  const { title, description, text, date } = request.body;
  const picture = `/api/${request.file.path}`;
  const data = { title, description, text, picture, date };

  try {
    const createdArticle = await blogController.addArticle(data);
    const articles = await blogController.getAllArticles();
    response.status(CREATED).json({ articles, message: 'Your article has been added! ' });
  } catch (error) {
    next(error);
  }
  console.log('');
});

blogRouter.put('/articles/edit/:id', upload.single('articleImage'), async (request, response) => {
  const dataToUpdate = {
    title: request.body.title,
    description: request.body.description,
    text: request.body.text,
    picture: `/api/${request.file.path}`,
    date: request.body.date
  };
  const { id } = request.params;

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
