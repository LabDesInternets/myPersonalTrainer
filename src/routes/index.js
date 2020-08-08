const express = require('express');

const contactRouter = require('../components/contact/contactRoute');

const mainRouter = express.Router();

mainRouter.use('/contact', contactRouter);

module.exports = mainRouter;