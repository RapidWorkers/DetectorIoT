var deviceController = require('../controllers/api.device.server.controller');
var valueController = require('../controllers/api.value.server.controller');

module.exports = function(app) {
    // route for api/device
    app.route('/api/device/:devCode')
        .get(deviceController.read)
        .put(deviceController.updateDeviceByCode);

    app.param('devCode', deviceController.getDeviceByCode);

    app.route('/api/device')
        .post(deviceController.registerDevice)
        //.put(deviceController.updateDevice)
       . get(deviceController.getDevice);

    //route for api/value
    app.route('/api/value/1')
        .post(valueController.addTemperature)
        .get(valueController.getTemperature);

    /**
    app.route('/api/value/2')
        .post(valueController.addFireInfo);

    app.route('/api/value/3')
        .post(valueController.addEarthQuakeInfo);

    app.route('/api/value/4')
        .post(valueController.addGasInfo);
    **/
}