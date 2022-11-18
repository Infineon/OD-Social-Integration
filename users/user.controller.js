/** FileName @users.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in Mongo DB for users schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in users module}
 *  </npm>
 * </summary>
 */
 const log4js = require('log4js');
 const jwt = require('jsonwebtoken');
 const User = require('./model/users.model');
 const logger = log4js.getLogger("userController");
 const authService = require('../services/auth.service');
//  const userProperty = require('.././property/model/userProperty.model');
 
 /**
  * @name verifyReraNo
  * @description {This method is used to verify RERA Number}
  * @param {reraContactNumber} 
  * @returns status message
  */
 exports.verifyReraNo = (req) => {
     try {
         return new Promise(function(resolve, reject) {
             User.find({
                 reraContactNumber: req.params.id
             }).then(function(user) {
                 resolve(user);
             }).catch(function(err) {
                 logger.error("User Controller : ", err);
                 reject(err);
             });
         });
     } catch (e) {
         logger.warn(e.message);
         reject(e.message);
     }
 };
 
 /**
  * @name isAuthenticate
  * @description {To authenticate users }
  * @param {any} req 
  * @returns {User Data and Auth Token} 
  */
 exports.isAuthCode = (req) => {
     try {
         return new Promise(function(resolve, reject) {
             User.findOne({
                 $and: [{
                     reraContactNumber: req.reraContactNumber
                 }, {
                     authCode: req.authCode
                 }]
             }).then(function(response) {
                 if (!response) {
                     reject('Number Not found');
                 } else {
                     const token = jwt.sign({
                         reraContactNumber: req.reraContactNumber,
                         userId: response._id,
                         userTypeId: response.userTypeId
                     }, "CRSuperTenant", {
                         expiresIn: "120m"
                     });
                     const body = {
                         "_id": response._id,
                         "name": response.name,
                         "email": response.email,
                         "gender": response.gender,
                         "contactNumber": response.contactNumber,
                         "emiratesId": response.emiratesId,
                         "interests": response.interests,
                         "userTypeId": response.userTypeId,
                         "status": response.status,
                         "reraContactNumber": response.reraContactNumber,
						 "pushNotification": response.pushNotification,
						 "locationBasedNotification": response.locationBasedNotification,
						 "emailNotification": response.emailNotification,
						 "smsNotification": response.smsNotification,
                         "authToken": token
                     }
                     resolve(body);
 
                 }
             });
         });
     } catch (err) {
         logger.error("User Controller : ", err);
         reject(err);
     }
 
 };
 
 /**
  * @name updateUserInterests
  * @description {To authenticate users }
  * @param {any} req 
  * @returns {User Data and Auth Token} 
  */
 exports.updateUserInterests = (req) => {
     try { 
         return new Promise(function(resolve, reject) {

			 console.log('req.userId : ', req.userId);
			 console.log('req.body : ', req.body);

             User.findByIdAndUpdate(req.userId, {
                 interests: req.body.interests
             }, {
                 new: true
             }).then(function(response) {
                 if (!response) {
                     reject('User Not found');
                 } else {
                     const body = {
                         "_id": response._id,
                         "name": response.name,
                         "email": response.email,
                         "gender": response.gender,
                         "contactNumber": response.contactNumber,
                         "emiratesId": response.emiratesId,
                         "interests": response.interests,
                         "userTypeId": response.userTypeId,
                         "status": response.status,
                         "reraContactNumber": response.reraContactNumber,
						 "pushNotification": response.pushNotification,
						 "locationBasedNotification": response.locationBasedNotification,
						 "emailNotification": response.emailNotification,
						 "smsNotification": response.smsNotification
                     }
                     resolve(body);
 
                 }
             });
         });
     } catch (err) {
         logger.error("User Controller : ", err);
         reject(err);
     } 
 };
 
 /**
  * @name updatePersonalInfo
  * @description {To update user personal info }
  * @param {any} req 
  * @returns {User Data and Auth Token} 
  */
 exports.updatePersonalInfo = (req) => {
     try {
         return new Promise(function(resolve, reject) {
             if (req.body.reraContactNumber) {
                 req.body.authCode = authService.authGenerator(1000, 9999);
             }

			 //console.log('req.userId : ', req.userId);
			 //console.log('req.body : ', req.body);


             User.findByIdAndUpdate(req.userId, req.body, {
                 new: true
             }).then(function(response) {
                 if (!response) {
                     reject('User Not found');
                 } else {
                     const body = {
                         "_id": response._id,
                         "name": response.name,
                         "email": response.email,
                         "gender": response.gender,
                         "contactNumber": response.contactNumber,
                         "emiratesId": response.emiratesId,
                         "interests": response.interests,
                         "userTypeId": response.userTypeId,
                         "status": response.status,
                         "reraContactNumber": response.reraContactNumber,
						 "pushNotification": response.pushNotification,
						 "locationBasedNotification": response.locationBasedNotification,
						 "emailNotification": response.emailNotification,
						 "smsNotification": response.smsNotification
                     }
                     resolve(body);
                 }
             });
         });
     } catch (err) {
         logger.error("User Controller : ", err);
         reject(err);
     }
 };
 
 
 /**
  * @name getRefreshToken
  * @description {To getRefreshToken }
  * @param {any} req
  * @returns {getRefreshToken} 
  */
 exports.getRefreshToken = (req) => {
     try {
         return new Promise(function(resolve, reject) {
             const Header = req.headers["authorization"];
             if (typeof Header !== "undefined") {
                 try {
                     const getUserData = jwt.verify(Header, 'CRSuperTenant', {
                         ignoreExpiration: true
                     });
                     const token = jwt.sign({
                         reraContactNumber: getUserData.reraContactNumber,
                         userId: getUserData.userId,
                         userTypeId: getUserData.userTypeId
                     }, "CRSuperTenant", {
                         expiresIn: "20m"
                     });
                     if (token) {
                         resolve(token);
                     } else {
                         reject('Invalid User');
                     }
                 } catch (error) {
                     reject('Invalid User');
                 }
             } else {
                 reject('Invalid User');
             }
         });
     } catch (err) {
         logger.error("User Controller : ", err);
         reject(err);
     }
 };
 
 exports.createPrivateTenant = (privateTenantDetails, userId) => {
     try {
         return new Promise(function(resolve, reject) {
             privateTenantDetails.userTypeId = '3';
             privateTenantDetails.authCode = authService.authGenerator(1000, 9999);
             privateTenantDetails.status = 'Pending';
             privateTenantDetails.avatar = '';
             privateTenantDetails.createdBy = userId;
             const privateTenant = new User(privateTenantDetails);
             privateTenant.save().then(function(details) {
                 privateTenantDetails.userId = details._id;
                 privateTenantDetails.status = 'Active';
                 privateTenantDetails.occupancyType = 'Tenant';
                 const privateTenantProperty = new userProperty(privateTenantDetails);
                 privateTenantProperty.save().then(function(propertyDetails) {
                     resolve(details);
                 });
             }).catch(function(err) {
                 reject(err);
             });
         });
     } catch (e) {
         logger.warn("User Controller : ",  e.message);
         reject(e.message);
     }
 };


 exports.invitePrivateExistingTenant = (req) => {
     try { 
         return new Promise(function(resolve, reject) {

			 console.log('req.userId : ', req.userId);
			 console.log('req.body : ', req.body);
			 
			 //req.body.createdBy = req.userId;
			 //req.body.authCode = authService.authGenerator(1000, 9999);

             User.findByIdAndUpdate(req.body.inviteUserId, {
                 createdBy: req.userId,
				 authCode: authService.authGenerator(1000, 9999)
             }, {
                 new: true
             }).then(function(response) {
                 if (!response) {
                     reject('User Not found');
                 } else {
                     const body = {
                         "_id": response._id,
                         "name": response.name,
                         "email": response.email,
                         "gender": response.gender,
                         "contactNumber": response.contactNumber,
                         "emiratesId": response.emiratesId,
                         "interests": response.interests,
                         "userTypeId": response.userTypeId,
                         "status": response.status,
                         "reraContactNumber": response.reraContactNumber,
						 "pushNotification": response.pushNotification,
						 "locationBasedNotification": response.locationBasedNotification,
						 "emailNotification": response.emailNotification,
						 "smsNotification": response.smsNotification

                     }
                     resolve(body);
 
                 }
             });
         });
     } catch (err) {
         logger.error("User Controller : ", err);
         reject(err);
     } 
 };
 