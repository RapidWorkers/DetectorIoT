var Device = require('mongoose').model('Device');
var Detection = require('mongoose').model('Detection');
var Temperature = require('mongoose').model('Temperature');
var TimeLog = require('mongoose').model('TimeLog');

exports.addTemperature = function(req, res, next) {
    var Log = new TimeLog();
    Log.save();

    var data = new Temperature();
    data.devCode = req.body.devCode;
    data.temperature = req.body.temperature;
    data.humidity = req.body.humidity;

    data.save(function(err){
        if(err) {
            return next(err);
        }else{
            res.json(data);
        }
    })
}

exports.getTemperature = function(req, res, next){
    Temperature.find(function (err, devices) {
        if(err) {
            return next(err);
        }else{
            res.json(devices);
        }
    })
}

exports.addDanger = function(req, res, next) {
    var Log = new TimeLog();
    Log.save();

    var data = new Detection();
    data.devCode = req.body.devCode;
    data.dangerType = req.body.dangerType;
    data.dangerValue = req.body.dangerValue;

    data.save(function(err){
        if(err) {
            return next(err);
        }else{
            res.json(data);
        }
    })
}

exports.getDanger = function(req, res, next){
    Detection.find(function (err, devices) {
        if(err) {
            return next(err);
        }else{
            res.json(devices);
        }
    })
}