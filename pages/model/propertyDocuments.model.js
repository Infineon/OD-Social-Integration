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

var propertyDocumentsSchema = new Schema({
    propertyId: {
        type: String,
        required: true
    },
    documentName: {
        type: String,
        required: true
    },
    documentPath: {
        type: String,
        required: true
    }
},
{ timestamps: { createdAt: "createdDate", updatedAt: "updatedDate" } });

module.exports = mongoose.model("propertyDocuments", propertyDocumentsSchema, "propertyDocuments");
