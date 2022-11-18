/*
 * FileName @Content.model
 * author @CriticalRiver
 * <summary>
 * A Content master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var contentSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    content: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("content", contentSchema, "content");