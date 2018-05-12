var mongoose = require("mongoose");

var DeviceSchema = new mongoose.Schema(
    {
        devType: Number,
        devIP: String,
        devCode: String, //we identify devices using devCode.
        regTime: {type: Number, default: Date.now} // if device is more than 15 minutes, ignore it.
    }
    );

mongoose.model('Device', DeviceSchema);