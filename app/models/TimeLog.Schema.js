const mongoose = require("mongoose");

const TimeLogSchema = new mongoose.Schema(
    {
        LastModifiedAt: {type: Number, default: Date.now}
    }
);

mongoose.model('TimeLog', TimeLogSchema);