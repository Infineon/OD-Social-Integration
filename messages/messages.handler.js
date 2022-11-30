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
 exports.messagesByID = (req, res) => {
//TODO - Validate ID
try {
    messagesService.fetchmessagesByID(req.body)
        .then(function(messages) {
            res.status(200)
                .send({
                    status: true,
                    message: 'Success',
                    code: 200,
                    data: messages
                })
        })
        .catch(function(err) {
            logger.error("Message Handler", err);
            res.status(403)
                .send({
                    status: false,
                    message: 'Messages Not Found',
                    code: 403,
                    data: {}
                })
        });
} catch (e) {
    logger.warn("Message Handler :", e.message);
    res.status(200)
        .send({
            status: false,
            message: e.message,
            data: {}
        });
}




    // res.status(501).send({
    //     status: true,
    //     message: 'Not implemented',
    //     code: 501,
    //     data: null
    // })
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


 

