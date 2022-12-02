const messagesHandler = require('./messages.handler');
const authService = require('../services/auth.service');


exports.routesConfig = function(Messagesapp) {

    // Messagesapp.get('/api/v1/messages', authService.authUser, [
    //     messagesHandler.fetchMessages
    // ]);
    Messagesapp.get('/api/v1/messages',  [
        messagesHandler.fetchMessages
    ]);
    Messagesapp.get('/api/v1/messages/:ID',  [
        messagesHandler.fetchMessagesByID
    ]);

    // // Messagesapp.get('/api/v1/messages/:ID', authService.authUser, [
    // //     messagesHandler.fetchMessagesByID
    // // ]);

	// Messagesapp.post('/api/v1/messages/', authService.authUser, [
    //     messagesHandler.createMessage
    // ]);

};

