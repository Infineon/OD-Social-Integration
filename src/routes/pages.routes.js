
const authService = require('../services/auth.service');
const express = require('express');
const router = express.Router();
module.exports = router;
// exports.routesConfig = function(pagesapp) {

//     pagesapp.get('/api/v1/pages', authService.authUser, [
//         pagesHandler.listPages
//     ]);
//     pagesapp.post('/api/v1/pages', authService.authUser, [
//         pagesHandler.createPages
//     ]);

//     pagesapp.get('/api/v1/pages/:ID/messages', authService.authUser, [
//         pagesHandler.fetchPageMessages
//     ]);

//     pagesapp.delete('/api/v1/pages/:id', authService.authUser, [
//         pagesHandler.deletePage
//     ]);

//     pagesapp.put('/api/v1/pages/:id', authService.authUser, [
//         pagesHandler.updatePages
//     ]);
// };
