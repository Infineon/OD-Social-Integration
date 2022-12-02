/** FileName @messages.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in mySQLDB for master schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in master module}
 *  </npm>
 * </summary>
 */
 const db = require("../services/mysql.service");
const Pagemessages = db.pagemessages;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.fetchmessagesByID = (req, res) => {
  Pagemessages.findAll({ where: {pageid:1} })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
  
};

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
  
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };