const mongoose = require("mongoose");

const DetectionSchema = new mongoose.Schema(
    {
        devCode: String,
        dangerType: Number,
        dangerValue: Number,
        regTime: {type: Number, default: Date.now}
    }
);

mongoose.model('Detection', DetectionSchema);