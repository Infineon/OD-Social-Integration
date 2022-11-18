/** FileName @contractRenewal.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in Mongo DB for contractRenewal schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in contractRenewal module}
 *  </npm>
 * </summary>
 */
 const log4js = require('log4js');
 const logger = log4js.getLogger("contractRenewalController");
 const notifications = require('./model/notifications.model');
 
 exports.createNotification = (req) => {
     try {
         return new Promise(function(resolve, reject) {
             const notificationsData = new notifications(req);
             notificationsData.save()
                 .then(function(response) {
                     if (!response) {
                         reject('Data Not found');
                     } else {
                         resolve(response);
                     }
 
                 });
         });
     } catch (err) {
         logger.error('Error', err);
         reject(err);
     }
 };
 
 /**
  * @name { getNotifications}
  * @description {This Handler Method is used to get contract renewal steps for tenant}
  * @param {any} req 
  * @param {any} res
  */
 exports.getNotifications = (userId) => {
     try {
         return new Promise(function(resolve, reject) {
             notifications.findOne({
                     toUser: userId
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Data Not found');
                     } else {
                         resolve(response);
                     }
 
                 });
         });
     } catch (err) {
         logger.error('Error', err);
         reject(err);
     }
 
 };
 