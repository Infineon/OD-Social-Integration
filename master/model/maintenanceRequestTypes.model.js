/*
 * FileName @maintenanceRequestTypes.model
 * author @CriticalRiver
 * <summary>
 * A Subscription master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var maintenanceRequestTypesSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("maintenanceRequestTypes", maintenanceRequestTypesSchema, "maintenanceRequestTypes");