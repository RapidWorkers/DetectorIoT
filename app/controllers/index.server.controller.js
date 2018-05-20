var Device = require('mongoose').model('Device');
var Detection = require('mongoose').model('Detection');
var Temperature = require('mongoose').model('Temperature');

exports.main = function(req,res) {

    if(!req.user){
        //return res.redirect('/signin');
    }

    res.render('index', {title : 'First Title'});
}

exports.weather = function(req, res){
    Temperature.find(function (err, weathers) {
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
            res.render('weather', {title: "날씨 정보", jsonWeatherData: JSON.stringify(weatherData)})
        }
    })
}