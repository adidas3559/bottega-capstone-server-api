module.exports = (sequelize, Sequelize) => {
    const Players = sequelize.define("players", {
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      hometown: {
        type: Sequelize.STRING
      }
    });
  
    return Players;
  };