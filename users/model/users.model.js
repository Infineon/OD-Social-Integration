/*
 * FileName @users.model
 * author @CriticalRiver
 * <summary>
 *  A User master model used to define the schema with mongoose services 
 * * </summary>
 */
const mongoose = require("../../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        index: {
            unique: true
        },
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender: {
        type: String
    },
    contactNumber: {
        type: String
    },
    emiratesId: {
        type: String,
        required: true
    },
    interests: {
        type: Array
    },
    userTypeId: {
        type: String
    },
    status: {
        type: String
    },
    authCode: {
        type: String
    },
    reraContactNumber: {
        type: String
    },
    avatar: {
        type: String
    },
    createdBy: {
        type: String
    },
    availCommunityService: {
        type: String
    },
    requestMaintenance: {
        type: String
    },
    pushNotification: {
      type: Boolean
    },
    locationBasedNotification: {
      type: Boolean
    },
    emailNotification: {
      type: Boolean
    },
    smsNotification: {
      type: Boolean
    }
});

UserSchema.path('contactNumber').validate(function(v) {
    var re = /^\d{10}$/;
    return (!v || !v.trim().length) || re.test(v);
}, 'Invalid Contact Number');

UserSchema.path('reraContactNumber').validate(function(v) {
    var re = /^\d{10}$/;
    return (!v || !v.trim().length) || re.test(v);
}, 'Invalid RERA Contact Number');

module.exports = mongoose.model("user", UserSchema, "users");