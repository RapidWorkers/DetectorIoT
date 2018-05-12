const mongoose = require("mongoose");

const TemperatureSchema = new mongoose.Schema(
    {
        devCode: String,
        temperature: Number,
        humidity: Number,
        addedAt: {type: Number, default: Date.now}
    }
);

mongoose.model('Temperature', TemperatureSchema);