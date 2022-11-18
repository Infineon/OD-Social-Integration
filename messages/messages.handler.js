/* 
 * FileName @messages.handler
 * author @CriticalRiver
 * <summary>
 *  This is consist of message handlers which is required list of API's on which application will run
 *   @Type controller:|message controller { Consist of Services That will hep to performing operations related to messages}
 * </summary>
 */
const logger = require('log4js').getLogger("MessagesHandler");
const messagesService = require('./messages.controller');

/**
 * @name {fetchMessages}
 * @description {This Handler method is used to fetch all message} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns Messages data or Failed }
 */
 exports.fetchMessages = (req, res) => {
        res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
        })
    }

/**
 * @name {fetchMessagesByID}
 * @description {This Handler method is used to fetch all message} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns Messages data or Failed }
 */
 exports.fetchMessagesByID = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}


/**
 * @name {createMessage}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns MessageID or Failed }
 */
 exports.createMessage = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}


 

