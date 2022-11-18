const userHandler = require('./users.handler');
const authService = require('../services/auth.service');

exports.routesConfig = function (userapp) {
    userapp.get('/api/v1/users', [
        userHandler.listUsers
    ]);
    userapp.post('/api/v1/users', [
        userHandler.createUser
    ]);

	userapp.put('/api/v1/users', authService.authUser, [
        userHandler.updateUser
    ]);

    userapp.delete('/api/v1/users', authService.authUser, [
        userHandler.deleteUser
    ]);

    userapp.get('/api/v1/users/messages', authService.authUser, [
        userHandler.getUserMessages
    ]);

    userapp.get('/api/v1/users/Credentials', authService.authUser, [
        userHandler.getUserCredentials
    ]);

    userapp.get('/api/v1/refreshToken', authService.authUser, [
        userHandler.getRefreshToken
    ]);

}; 
