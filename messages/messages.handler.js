/* 
 * FileName @messages.handler
 * author @CriticalRiver
 * <summary>
 *  This is consist of payment handlers which is required list of API's on which application will run
 *   @Type controller:|payment controller { Consist of Services That will hep to performing operations related to payments}
 * </summary>
 */
const logger = require('log4js').getLogger("UserHandler");
const userService = require('./user.controller');

/**
 * @name {fetchMessages}
 * @description {This Handler method is used to fetch all message} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.listMessages = (req, res) => {
        res.status(200).send({
            status: true,
            message: 'Not implemented',
            code: 200,
            data: user
        })
    }

/**
 * @name {fetchMessagesByID}
 * @description {This Handler method is used to fetch all message} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns Messages data or Failed }
 */
 exports.listMessages = (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Not implemented',
        code: 200,
        data: user
    })
}


/**
 * @name {createMessage}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.createMessage = (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Not implemented',
        code: 200,
        data: user
    })
}

/**
 * @name {respondMessage}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.respondMessage = (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Not implemented',
        code: 200,
        data: user
    })
}
/**
 * @name {updateMessage}
 * @description {This Handler method is used to update a message} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.updateMessage = (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Not implemented',
        code: 200,
        data: user
    })
}


/**
 * @name {deleteMessage}
 * @description {This Handler method is used to delete a message} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.deleteMessage = (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Not implemented',
        code: 200,
        data: user
    })
}

 

