/*
 * FileName @messages.model
 * author @sudhakar
 * <summary>
 * A page-message-user model used to define the schema with mySQL services 
 * </summary>
 */
const { Sequelize, DataTypes,Model } = require('sequelize');
const dbConfig = require('../config/db.config')
// const sequelize = new Sequelize('sqlite::memory:');
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

class pagemessageuserer extends Model {}
pagemessageuserer.init({
    
    pageid: {
        type: DataTypes.INTEGER
    },
    messgeid: {
    type: DataTypes.INTEGER
    },
    userid: {
    type: DataTypes.INTEGER
    }
    
    

},{
    sequelize, // We need to pass the connection instance
  modelName: 'pagemessageuserer' // We need to choose the model name
})

// module.exports = (sequelize, Sequelize) => {
//     var pagemessageuser = sequelize.define('page-message-user',
//      {
//         pageid: {
//         type: Sequelize.INTEGER
//     },
//     messgeid: {
//     type: Sequelize.INTEGER
//     },
//     userid: {
//     type: Sequelize.INTEGER
//     }
//     });
//     Pageid: {}
//     return pagemessageuser;
//     };
