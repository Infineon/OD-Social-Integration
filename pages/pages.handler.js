/* 
 * FileName @pages.handler
 * author @Criticalriver
 * <summary>
 *  This is consist of property handlers which is required list of API's on which application will run
 *   @Type controller:|Property controller { Consist of Services That will hep to performing operations related to properties}
 * </summary>
 */
const logger = require('log4js')
    .getLogger("pagesHandler");
const pagesService = require('./pages.controller');

/**
 * @name {listPages}
 * @description {This Handler method is used to fetch all Pages} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns User data or Failed }
 */
 exports.listPages = (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Not implemented',
        code: 200,
        data: user
    })
}

/**
* @name {fetchPageMessages}
* @description {This Handler method is used to fetch messages associated with Pages} 
* @param {any} req 
* @param {any} res 
* @return {Returns Messages data or Failed }
*/
exports.fetchPageMessages = (req, res) => {
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
* @name {deletePage}
* @description {This Handler method is used to update the user personal info} 
* @param {any} req 
* @param {any} res 
* @return {Returns User data or Failed }
*/
exports.deletePage = (req, res) => {
res.status(200).send({
    status: true,
    message: 'Not implemented',
    code: 200,
    data: user
})
}
/**
* @name {updatePages}
* @description {This Handler method is used to update a message} 
* @param {any} req 
* @param {any} res 
* @return {Returns User data or Failed }
*/
exports.updatePages = (req, res) => {
res.status(200).send({
    status: true,
    message: 'Not implemented',
    code: 200,
    data: user
})
}





