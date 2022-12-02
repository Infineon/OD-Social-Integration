module.exports = (sequelize, Sequelize) => {
  const pagemessageuser = sequelize.define("page-message-user", { 
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