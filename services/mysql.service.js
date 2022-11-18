/* global mongodb;
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
const log4js = require('log4js');
const logger = log4js.getLogger("mysqldb");
const mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'onlinedocumentation-social'
})


// const uri = "mongodb+srv://supertenant:Stcr2022@cluster0.dq06i.mongodb.net/superTenant?retryWrites=true&w=majority";
//const uri = "mongodb://localhost/superTenant"
let count = 0;

// const options = {
//     autoIndex: true,
//     poolSize: 10, // Maintain up to 10 socket connections
//     bufferMaxEntries: 0,
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// };

const connectWithRetry = () => {
    logger.info('mysql connection with retry')
    pool.getConnection((err, connection) => {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Database connection was closed.')
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                console.error('Database has too many connections.')
            }
            if (err.code === 'ECONNREFUSED') {
                console.error('Database connection was refused.')
            }
            setTimeout(connectWithRetry, 5000)
        }
        else{
            logger.info('mySQL is connected')
        }
        if (connection) connection.release()
        return
    })
    
};

connectWithRetry();

exports.mysql = pool;
