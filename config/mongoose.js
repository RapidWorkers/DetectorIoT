var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    //database connection
    var db = mongoose.connection;

    db.on('error', console.error);
    db.once('open', function(){
        console.log("Successfully connected to MongoDB");
    });

    mongoose.connect("mongodb://"+config.mongoDB.host+":" + config.mongoDB.port + "/" +config.mongoDB.database, {keepAlive: 1});

    require('../app/models/Detection.Schema');
    require('../app/models/Device.Schema');
    require('../app/models/Temperature.Schema');
    require('../app/models/Auth.Schema');

    return db;
}