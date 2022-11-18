/*
 * FileName @UserProperty.model
 * author @CriticalRiver
 * <summary>
 * User Property Model with _id, propertyId , userId, status and occupancyType 
 * </summary>
 */
const mongoose = require("../../services/mongoose.service")
    .mongoose;
const Schema = mongoose.Schema;

var userPropertySchema = new Schema({
    propertyId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    occupancyType: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("userProperty", userPropertySchema, "userProperties");
