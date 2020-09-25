const express = require('express');
const contactController = require('./contactController');


const contactRouter = express.Router();


contactRouter.post('/send', async (request, response) => {
  const mailInfo = request.body;

  const result = await contactController.sendMeMail(mailInfo);

  response.status(200).json({ result, message: 'Votre message a bien été envoyé !' });
});

contactRouter.post('/book/send', async (request, response) => {
  const bookingInfo = request.body;

  const result = await contactController.sendBookingMail(bookingInfo);

  response.status(200).json({ result, message: 'Votre demande de réservation a bien été envoyée !' });
});


module.exports = contactRouter;
