/*
 * FileName @InterestTypes.model
 * author @CriticalRiver
 * <summary>
 * A Interests Types master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var interestTypesSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("interestTypes", interestTypesSchema, "interestTypes");