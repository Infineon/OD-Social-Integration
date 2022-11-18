/*
 * FileName @subscriptions.model
 * author @CriticalRiver
 * <summary>
 * A Subscription master model used to define the schema with mongoose services 
 * </summary>
 */

const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var subscriptionsSchema = new Schema(
    {
		description: {
			type: String,
			required: true
		  },
		  planName: {
			type: String,
			required: true
		  },
		  price: {
			type: Number,
			required: true
		  }


    });

module.exports = mongoose.model("subscriptions", subscriptionsSchema,"subscriptions");
