const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = 'Your API Key'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prajjwalsahu5432@gmail.com',
        subject: 'Thanks for joining in.',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prajjwalsahu5432@gmail.com',
        subject: 'GoodBye.',
        text: `Thanks for using the application ${name}. Please send feedback on how to improve more.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}