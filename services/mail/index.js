const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASS,
  },
});

module.exports = {
  sendMail: async (to, subject, text) => {
    const mailOptions = {
      from: 'Admin',
      to,
      subject,
      html: text,
    };
    return transporter.sendMail(mailOptions);
  },
};
