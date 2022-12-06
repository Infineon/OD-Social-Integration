const express = require('express');
const router = express.Router();
const messages = require('./message.routes');
const users = require('./users.routes');
const pages = require('./pages.routes');


router.use('/users',users);
router.use('/messages',messages);
router.use('/pages',pages);


module.exports = router;



