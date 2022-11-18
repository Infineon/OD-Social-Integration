/*
 * FileName @payments.model
 * author @CriticalRiver
 * <summary>
 * A Subscription master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var paymentsSchema = new Schema({
    propertyId: {
        type: String
    },
    paymentType: {
        type: String
    },
    amount: {
        type: Number
    },
	orderNumber: {
       type: String
    },
    transactionId: {
        type: String
    },
    checkoutId: {
        type: String
    },
	checkoutUrl: {
        type: String
    },
    status: {
        type: String
    },
    date: {
        type: Date
    },
    paymentResponse: {
        type: Object
    },
    contractId: {
        type: String
    },
    userId: {
        type: String
    },
    cheques: {
        type: Array
    }
}, {
    timestamps: {
        createdAt: "createdDate",
        updatedAt: "updatedDate"
    }
});

module.exports = mongoose.model("payment", paymentsSchema, "payments");
