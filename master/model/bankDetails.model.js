const mongoose = require("../../services/mongoose.service")
    .mongoose;
const Schema = mongoose.Schema;

var bankDetailsSchema = new Schema({
    bankId: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    accountTitle: {
        type: String,
        required: true
    },
    ibanNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("bankDetails",bankDetailsSchema, "bankDetails");
