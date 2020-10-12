const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendAuthCode = (email, name, code) => {
    sgMail.send({
        to: email,
        from: 'email@Honda.com',
        subject: 'Confirming credentials',
        text: `Hello ${name}, Here is your authentication code: ${code}. If this is not you, please report this incident.`
    })
}


module.exports = {
    sendAuthCode
}