var Device = require('mongoose').model('Device');
var Detection = require('mongoose').model('Detection');
var Temperature = require('mongoose').model('Temperature');
var TimeLog = require('mongoose').model('TimeLog');

exports.dashboard = function(req,res) {

    if(!req.user){
        //return res.redirect('/signin');
    }
    TimeLog.find({},[],{limit: 1, sort: {_id: -1}}, function(err, time){
        res.render('index', {title : '대쉬 보드', lastMod: time[0].LastModifiedAt});
    });

}

exports.weather = function(req, res){
    TimeLog.find({},[],{limit: 1, sort: {_id: -1}}, function(err, time){
        Temperature.find({},[] ,{limit: 90, sort:{_id: -1}},function (err, weathers) {
            if(err) {
                return next(err);
            }else{
                var weatherData = [];//empty array
                for(var i in weathers)  {
                    weatherData[i] = Array();
                    weatherData[i][0] = weathers[i].addedAt;
                    weatherData[i][1] = weathers[i].temperature;
                    weatherData[i][2] = weathers[i].humidity;
                }
                res.render('weather', {title: "날씨 정보", jsonWeatherData: JSON.stringify(weatherData), lastMod: time[0].LastModifiedAt})
            }
        });
    })
}

exports.gasandfire = function(req, res){
    TimeLog.find({},[],{limit: 1, sort: {_id: -1}}, function(err, time){
        Detection.find({},[] ,{limit: 270, sort:{_id: -1}},function (err, weathers) {
            if(err) {
                return next(err);
            }else{
                var weatherData = [];//empty array
                for(var i in weathers)  {
                    weatherData[i] = Array();
                    weatherData[i][0] = weathers[i].addedAt;
                    weatherData[i][1] = weathers[i].dangerType;
                    weatherData[i][2] = weathers[i].dangerValue;
                }
                res.render('gasandfire', {title: "가스/불꽃 정보", jsonGFData: JSON.stringify(weatherData), lastMod: time[0].LastModifiedAt})
            }
        });
    })
}