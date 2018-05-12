var Device = require('mongoose').model('Device');

exports.registerDevice = function(req, res, next){
    var data = new Device();
    data.devType = req.body.devType;
    data.devIP = req.ip;
    data.devCode = req.body.devCode;

    data.save(function(err){
        if(err) {
            return next(err);
        }else{
            res.json(data);
        }
    })
}

exports.getDevice = function(req, res, next){
    Device.find(function (err, devices) {
        if(err) {
            return next(err);
        }else{
            res.json(devices);
        }
    })
}

exports.read = function(req, res){
    res.json(req.devices);
}

exports.getDeviceByCode = function(req, res, next, devCode){
    Device.findOne({devCode : devCode}, function (err, devices) {
        if(err) {
            return next(err);
        }else{
            req.devices = devices;
            next();
        }
    })
}

exports.updateDeviceByCode = function(req, res, next){
    Device.findOneAndUpdate(req.devices.devCode, {regTime: Date.now()}, function (err, devices) {
        if(err) {
            return next(err);
        }else{
            res.json(devices);
        }
    })
}

