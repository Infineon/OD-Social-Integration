/*
 * FileName @messages.model
 * author @sudhakar
 * <summary>
 * A Message master model used to define the schema with mySQL services 
 * </summary>
 */
const  db= require('./index'),
Sequelize = db.Sequelize,
sequelize = db.sequelize
const messages = sequelize.define("messages", {
	messageid:{
		type: Sequelize.INTEGER,    
		allowNull: false,
		primaryKey: true,
	},
	messagesocialid: {
		type: Sequelize.INTEGER
	},
	messagetext: {
		type: Sequelize.STRING
	},
	messagedate: {
		type: Sequelize.DATE
	}
},{timestamps: false});
	  
module.exports = messages;

