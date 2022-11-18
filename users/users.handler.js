/* 
 * FileName @user.handler
 * author @CriticalRiver
 * <summary>
 *  This is consist of User handlers which is required list of API's on which application will run
 *   @Type controller:|User controller { Consist of Services That will hep to performing operations related to users}
 * </summary>
 */
const logger = require('log4js').getLogger("UserHandler");
const userService = require('./user.controller');

/**
 * @name {listUsers}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.listUsers = (req, res) => {
        res.status(501).send({
            status: true,
            message: 'Not implemented',
            code: 501,
            data: null
        })
    }


/**
 * @name {createUser}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.createUser = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}

/**
 * @name {updateUser}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.updateUser = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}


/**
 * @name {deleteUser}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.deleteUser = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}

/**
 * @name {getUserMessages}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.getUserMessages = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}

/**
 * @name {getUserCredentials}
 * @description {This Handler method is used to update the user personal info} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.getUserCredentials = (req, res) => {
    res.status(501).send({
        status: true,
        message: 'Not implemented',
        code: 501,
        data: null
    })
}

/**
 * @name {getRefreshToken}
 * @description {This Handler method is used to get Refresh Token} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns Refresh Token or Failed}
 */
exports.getRefreshToken = (req, res) => {
    try {
        userService.getRefreshToken(req).then(function(user) {
            res.status(501).send({
                status: true,
                message: 'Not implemented',
                code: 501,
                data: null
            })
        }).catch(function(err) {
            logger.error("User Handler", err);
            res.status(403).send({
                status: false,
                message: 'Failed',
                code: 403,
                data: {}
            })
        });
    } catch (e) {
        logger.warn(e.message);
        res.status(200).send({
            status: false,
            message: e.message
        });
    }
}

