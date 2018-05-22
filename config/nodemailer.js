const nodemailer = require('nodemailer'),
    config = require('./config');

module.exports = function () {
    let transporter = nodemailer.createTransport({
        host: config.emailConfig.host,
        port: config.emailConfig.port,
        secure: config.emailConfig.secure, // true for 465, false for other ports
        auth: {
            user: config.emailConfig.userid, // generated ethereal user
            pass: config.emailConfig.password // generated ethereal password
        }});

    transporter.verify(function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log('NodeMailer: Server is ready to take our messages');
        }
    });

    return transporter;
};

