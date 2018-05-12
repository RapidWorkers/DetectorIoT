/**
 * Detector IOT
 * @author RapidWorkers
 * @license MIT License
 * @copyright Copyright RapidWorkers 2018 All right reserved.
 */

/** ################### INIT ################### **/
var fs = require('fs'),
    mongoose = require('./config/mongoose')
    express = require('./config/express_config'),

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/** ############################################ **/

console.log("=========================================");
console.log("IOT for Arduino, API Server");
console.log("by SOOHYUN KIM @ Kwangwoon Univ.");
console.log("=========================================");

/** ############################################ **/

var db = mongoose();
var app = express();

app.use(errorHandler); //DEBUG
module.exports = app;

app.listen(config.webConfig.port, function () {
    console.log("HTTP PORT OPENED %d", config.webConfig.port);
});

app.use(function (req, res) {
    res.status(404);
    res.type('html').send('Page not found.');
});

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {error: err})
}
