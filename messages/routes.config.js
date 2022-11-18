const messagesHandler = require('./messages.handler');
const asuthService = require('../services/auth.service');


exports.routesConfig = function(Messagesapp) {

    messagesapp.get('/api/v1/messages', authService.authUser, [
        messagesHandler.fetchMessages
    ]);
    messagesapp.get('/api/v1/messages/:ID', authService.authUser, [
        messagesHandler.fetchMessagesByID
    ]);

	messagesapp.post('/api/v1/messages/', authService.authUser, [
        messagesHandler.createMessage
    ]);

    messagesapp.post('/api/v1/messages/response/:ID', [
        messagesHandler.respondMessage
    ]);

    messagesapp.put('/api/v1/messages/', authService.authUser, [
        messagesHandler.updateMessage
    ]);
    
    messagesapp.delete('/api/v1/messages/', authService.authUser, [
        messagesHandler.deleteMessage
    ]);
        messagesapp.post('/api/v1/messages/response/:ID', [
        messagesHandler.respondMessage
    ]);

};

