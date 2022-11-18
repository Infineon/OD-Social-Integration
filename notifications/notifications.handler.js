/* 
 * FileName @notifications.handler
 * author @Criticalriver
 * <summary>
 *  This is consist of notifications handlers which is required list of API's on which application will run
 *   @Type controller:|notifications controller { Consist of Services That will hep to performing operations related to properties}
 * </summary>
 */
const logger = require('log4js')
    .getLogger("notificationsHandler");
const notificationsService = require('./notifications.controller');

/**
 * @name { createNotification}
 * @description {This Handler Method is used to create notification}
 * @param {any} req 
 * @param {any} res
 */
exports.createNotification = (req, res) => {
    try {
        notificationsService.createNotification(req.body, req.userId)
            .then(function(response) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: response
                    })
            })
            .catch(function(err) {
                logger.error("Handler", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Notification creation Failed',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn(e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

/**
 * @name { getNotifications}
 * @description {This Handler Method is used to get the notifications}
 * @param {any} req 
 * @param {any} res
 */
exports.getNotifications = (req, res) => {
    try {
        notificationsService.getNotifications(req.userId)
            .then(function(response) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: response
                    })
            })
            .catch(function(err) {
                logger.error("Handler", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Notifications Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn(e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}
