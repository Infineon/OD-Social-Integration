/** FileName @messages.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in mySQLDB for master schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in master module}
 *  </npm>
 * </summary>
 */
 const config = require('../config.js');

 const log4js = require('log4js');
 const logger = log4js.getLogger("messagesController");
 const axios = require('axios').default;
 const authService = require('../services/auth.service');
