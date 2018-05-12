var express = require("express"),
    router = express.Router(),
    fs = require("fs");
    //rest = require("connect-rest");
router.post('/value', function(req, res) {//add value to database..

    //device registered check here..
    //api key check here

    if(req.params.type == 1){

        var temp = new temperature;
        temp.devCode = req.body.devCode;
        temp.temperature = req.body.temperature;
        temp.humidity = req.body.humidity;
        temp.addedAt = Date.now; //use default

        temp.save(function(err){
            if(err){
                res.status(500).json({result: 'fail'});
                console.log('Value add Fail from '+req.ip, req.params.type);
                throw err;
            }
            else {
                console.log('Value Added!, Type: %s', req.params.type);
                res.json({status: 'success'});
            }
        })

    }else if(req.params.type == 2){
        var temp = new temperature;
        temp.devCode = req.body.devCode;
        temp.temperature = req.body.temperature;
        temp.humidity = req.body.humidity;

        temp.save(function(err){
            if(err){
                res.status(500).json({result: 'fail'});
                console.log('Value add Fail from '+req.ip, req.params.type);
                throw err;
            }
            else {
                console.log('Value Added!, Type: %s', req.params.type);
                res.json({status: 'success'});
            }
        })
    }else if(req.params.type == 3){
        var temp = new temperature;
        temp.devCode = req.body.devCode;
        temp.temperature = req.body.temperature;
        temp.humidity = req.body.humidity;

        temp.save(function(err){
            if(err){
                res.status(500).json({result: 'fail'});
                console.log('Value add Fail from '+req.ip, req.params.type);
                throw err;
            }
            else {
                console.log('Value Added!, Type: %s', req.params.type);
                res.json({status: 'success'});
            }
        })
    }else if(req.params.type == 4){
        var temp = new temperature;
        temp.devCode = req.body.devCode;
        temp.temperature = req.body.temperature;
        temp.humidity = req.body.humidity;

        temp.save(function(err){
            if(err){
                res.status(500).json({result: 'fail'});
                console.log('Value add Fail from '+req.ip, req.params.type);
                throw err;
            }
            else {
                console.log('Value Added!, Type: %s', req.params.type);
                res.json({status: 'success'});
            }
        })
    }else{
        //error handle here.
        res.status(500).json({result: 'fail'});
    }
});

router.post('/register', function(req, res) { // register device to database.
    /**
     * type = 1 -> 온습도 감지
     * type = 2 -> 화재 감지
     * type = 3 -> 진동 감지
     * type = 4 -> 가스 감지
     */

    console.log(req.body);



    if(req.body.devType < 1 || req.body.devType > 4)
    {
        res.status(500).json({result: 'fail'});
        console.log('Device Register Fail from '+req.ip, req.params.type);
        return;
    }

    var reg_temp = new deviceSchema();
    reg_temp.devType = req.body.devType;
    reg_temp.devIP = req.ip;
    reg_temp.devCode = req.body.devCode;
    //reg_temp.regTime = Date.now; //use default

    reg_temp.save(function(err){
        if(err){
            res.status(500).json({result: 'fail'});
            console.log('Device Register Fail from '+req.ip);
            throw err;
        }
        else {
            console.log('New Device Registered!, Code: %s', req.body.devCode);
            res.json({status: 'success'});
        }
    })
})


module.exports = router;

