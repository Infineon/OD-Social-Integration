const notificationsHandler = require('../notifications/notifications.handler');
const authService = require('../services/auth.service');

exports.routesConfig = function(notificationsapp) {

    notificationsapp.post('/api/v1/createNotification', authService.authUser, [
        notificationsHandler.createNotification
    ]);

    notificationsapp.get('/api/v1/getNotifications', authService.authUser, [
        notificationsHandler.getNotifications
    ]);

};
