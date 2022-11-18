/*
 * FileName @InterestTypes.model
 * author @CriticalRiver
 * <summary>
 * A Interests Types master model used to define the schema with mongoose services 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var maintenanceRequestServicesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    maintenanceRequestTypeId: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("maintenanceRequestServices", maintenanceRequestServicesSchema, "maintenanceRequestServices");