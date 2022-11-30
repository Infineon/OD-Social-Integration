/*
 * FileName @messages.model
 * author @CriticalRiver
 * <summary>
 * A Message master model used to define the schema with mySQL services 
 * </summary>
 */
module.express = (sequelize, Sequelize) => {
    const messages = sequelize.define("messages", {
        messagesocialid: {
        type: Sequelize.INTEGER
    },
    messagetext: {
    type: Sequelize.STRING
    },
    messagedate: {
    type: Sequelize.DATE
    }
    });
    return messages;
    };
