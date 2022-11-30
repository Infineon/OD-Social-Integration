/*
 * FileName @messages.model
 * author @CriticalRiver
 * <summary>
 * A page-message-user model used to define the schema with mySQL services 
 * </summary>
 */

module.express = (sequelize, Sequelize) => {
    const pagemessageuser = sequelize.define("page-message-user",
     {
        pageid: {
        type: Sequelize.INTEGER
    },
    messgeid: {
    type: Sequelize.INTEGER
    },
    userid: {
    type: Sequelize.INTEGER
    }
    });
    return pagemessageuser;
    };
