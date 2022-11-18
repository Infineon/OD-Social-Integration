/*
 * FileName @advertisements.model
 * author @CriticalRiver
 * <summary>
 * A advertisements master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var advertisementsSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("advertisements", advertisementsSchema, "advertisements");