const nodemailer = require('nodemailer');

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
        console.log(error); // Show a page indicating failure
      } else {
        console.log('email sent'); // Show a page indicating success
      }
    });
  }
};

module.exports = contactController;
