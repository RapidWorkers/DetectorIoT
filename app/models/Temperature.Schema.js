const mongoose = require("mongoose");

const TemperatureSchema = new mongoose.Schema(
    {
        devCode: String,
        temperature: {type: Number, required: true},
        humidity: {type: Number, required: true},
        addedAt: {type: Number, default: Date.now}
    }
);

mongoose.model('Temperature', TemperatureSchema);