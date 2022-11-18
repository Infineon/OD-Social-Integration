const mongoose = require("../../services/mongoose.service")
    .mongoose;
const Schema = mongoose.Schema;

var banksSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("banks", banksSchema, "banks");
