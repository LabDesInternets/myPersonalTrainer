const nodemailer = require('nodemailer');
const logger = require('../../helpers/logger');

const urlClient = process.env.URL_CLIENT;
// create reusable transporter object using the default SMTP transport
const smtpTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});


const contactController = {
  sendMeMail: async (mailInfo) => {
    const {
      firstName, lastName, email, subject, messageToSend
    } = mailInfo;

    const mailOptions = {
      from: `${firstName} ${lastName}, ${email}`, // This is ignored by Gmail
      to: process.env.GMAIL_USER,
      subject: `${subject}`,
      text: `${firstName} (${email}) says: ${messageToSend}`,
      html: `
    <p>Nom : ${firstName} ${lastName}</p>
    <p>Email : ${email}<p>
    <p>Sujet : ${subject}</p>
    <p>Message : 
    <br>
    <p>${messageToSend.replace(/\n/g, '<br>')}</p>
    `
    };

    smtpTransporter.sendMail(mailOptions, (error) => {
      if (error) {
        logger.error(error);// Show a page indicating failure
      } else {
        logger.info('contact email sent'); // Show a page indicating success
      }
    });
  },
  sendBookingMail: async (bookingInfo) => {
    const {
      firstName, lastName, phone, email, messageToSend
    } = bookingInfo;

    const bookingMailOptions = {
      from: `${firstName} ${lastName}, ${email}`, // This is ignored by Gmail
      to: process.env.GMAIL_USER,
      subject: `Demande de réservation séance d'essai gratuite`,
      text: `${firstName} (${email}) says: ${messageToSend}`,
      html: `
    <p>Nom : ${firstName} ${lastName}</p>
    <p>Tel : ${phone}</p>
    <p>Email : ${email}<p>
    <p>Message : 
    <br>
    <p>${messageToSend.replace(/\n/g, '<br>')}</p>
    `
    };

    smtpTransporter.sendMail(bookingMailOptions, (error) => {
      if (error) {
        logger.error(error);// Show a page indicating failure
      } else {
        logger.info('booking email sent'); // Show a page indicating success
      }
    });
  },
  sendMailToUser: async (data) => {
    const { userId, email, resetPasswordToken } = data;
    const mailOptions = {
      to: email,
      from: process.env.GMAIL_USER,
      subject: 'MyPersonalTrainer Password Reset',
      text: `${'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
        + 'Please click on the following link, or paste this into your browser to complete the process:\n\n'
        + 'http://'}${urlClient}/reset/${userId}/${resetPasswordToken}\n\n`
        + 'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
    smtpTransporter.sendMail(mailOptions, (error) => {
      if (error) {
        logger.error(error); // Show a page indicating failure
      } else {
        logger.info('email sent'); // Show a page indicating success
      }
    });
  }
};

module.exports = contactController;
