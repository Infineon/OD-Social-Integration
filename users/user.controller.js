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
 