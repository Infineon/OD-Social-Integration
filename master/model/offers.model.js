/*
 * FileName @advertisements.model
 * author @CriticalRiver
 * <summary>
 * A Subscription master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var offersSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    endDate: {
        type: Date
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("offers", offersSchema, "offers");