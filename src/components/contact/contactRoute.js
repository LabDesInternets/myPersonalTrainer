const express = require('express');
const contactController = require('./contactController');


const contactRouter = express.Router();


contactRouter.post('/send', async (request, response) => {
  const mailInfo = request.body;

  const result = await contactController.sendMeMail(mailInfo);

  response.status(200).json({ result, message: 'Your message has been sent! ' });
});

module.exports = contactRouter;
