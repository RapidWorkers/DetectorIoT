const mongoose = require("mongoose");

const DetectionSchema = new mongoose.Schema(
    {
        devCode: String,
        dangerType: {type: Number, required: true}, //CO2, FIRE, ALCOHOL
        dangerValue: {type: Number, required: true}, //ppm, t/f, ppm
        addedAt: {type: Number, default: Date.now}
    }
);

mongoose.model('Detection', DetectionSchema);