var express = require("express"),
    router = express.Router();

const devices = require("../app/models/Device.Schema");
const temperature = require("../app/models/Temperature.Schema");

router.get('/temperature', function (req, res){

})

router.get('/dangerLog', function (req, res){

})

router.get('/options', function (req, res){

})

router.get('/test', function (req, res){

})

module.exports = router;