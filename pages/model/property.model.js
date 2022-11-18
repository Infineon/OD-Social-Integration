/*
 * FileName @property.model
 * author @Criticalriver
 * <summary>
 * Property Model with _id, propertyType ,name and address model 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service")
    .mongoose;
const Schema = mongoose.Schema;

var propertySchema = new Schema({
    propertyType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("property", propertySchema, "property");
