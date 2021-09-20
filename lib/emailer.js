const nodemailer = require('nodemailer')
const { config } = require('dotenv')

config()

const sendMail = async (
  to = 'theiremail@gmail.com',
  subject = 'Zuri emailer',
  html = '<h1>"abstain from amala"<h1>',
  bcc = null
) => {
  try {
    let testAccount = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    })
    const mailOptions = {
      from: 'youremail@gmail.com',
      to,
      subject,
      html
    }

    let info = await transporter.sendMail(mailOptions)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    return nodemailer.getTestMessageUrl(info)
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports.sendMail = sendMail
