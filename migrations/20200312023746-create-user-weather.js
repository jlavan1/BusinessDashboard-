'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_weathers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weather_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'user_accounts'
          },
          key: 'id'
        }
      },
      city: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_weathers');
  }
};