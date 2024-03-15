const mongoose = require("mongoose");


const MODELNAME = "issue";
const STATUS_ENUM = ['TODO', 'IN_PROGESS', 'DONE'];

const Schema = new mongoose.Schema({
    reporter: { type: String, required: true },
    projectId: { type: String, required: true, },
    assigneeId: { type: String },
    assigneeName: { type: String },
    created_at: { type: Date, default: Date.now },
    description: { type: String, required: true, },
    title: { type: String, required: true, },
    status: { type: String, required: true, uppercase: true, enum: STATUS_ENUM, default: 'TODO' },
    type: { type: String, enum: ["FEATURE", "BUG"] },
});

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
