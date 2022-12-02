/* global mysql;
 * FileName @mysql.service
 * author @Criticl River
 * <summary>
 *  A service is used to connect database, check connection if failed to connect it will retry to connect again.
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in mySql module}
 *      @mysql {Used to work with mysql instance}
 *  </npm>
 * </summary>
 */
const dbConfig = require("../config/db.config.js");
const log4js = require('log4js');
const logger = log4js.getLogger("Sequelize");
//const mysql = require('mysql');
var {Sequelize} =require('sequelize')
// const sequelizer = new Sequelize(
//     'onlinedocumentation-social',
//     'root',
//     'root',
//    );

const sequelize = new Sequelize( dbConfig.HOST , dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
        }
    });
    const db = {};
    
    // db.Sequelize = Sequelize;
    // db.sequelizer = sequelizer;
  
    db.messages = require("../messages/model/messages.model.js");
    // db.pages = require("../../pages/model/pages.model.js");
    // db.users = require("../../users/model/users.model.js");
    db.pagemessageusers = require("../messages/model/page-message-user.model.js");
    
exports.mysql = db;
