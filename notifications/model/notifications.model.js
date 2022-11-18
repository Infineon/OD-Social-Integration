/*
 * FileName @notificationsSchema.model
 * author @Criticalriver
 * <summary>
 * notificationsSchema Model
 * </summary>
 */
const mongoose = require("../../services/mongoose.service")
    .mongoose;
const Schema = mongoose.Schema;

var notificationsSchema = new Schema({
    fromUser: {
        type: String,
        required: true
    },
    toUser: {
        type: String,
        required: true
    },
    notificationType: {
        type: String,
        required: true
    },
    notificationMessage: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "createdDate",
        updatedAt: "updatedDate"
    }
});

module.exports = mongoose.model("notifications", notificationsSchema, "notifications");
