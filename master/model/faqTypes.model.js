/*
 * FileName @faqs.model
 * author @CriticalRiver
 * <summary>
 * A Subscription master model used to define the schema with mongoose services 
 * </summary>
 */

const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var faqsSchema = new Schema(
    {	
		name: {
			type: String
		  }
    });

module.exports = mongoose.model("faqTypes", faqsSchema,"faqTypes");
