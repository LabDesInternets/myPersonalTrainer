const express = require('express');

const contactRouter = require('../components/contact/contactRoute');
const blogRouter = require('../components/blog/blogRoute');
const userRouter = require('../components/user/userRoute');

const mainRouter = express.Router();

mainRouter.use('/contact', contactRouter);
mainRouter.use('/blog', blogRouter);
mainRouter.use('/users', userRouter);

module.exports = mainRouter;
