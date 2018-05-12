var Device = require('mongoose').model('Device');
var Detection = require('mongoose').model('Detection');
var Temperature = require('mongoose').model('Temperature');

exports.addTemperature = function(req, res, next) {
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