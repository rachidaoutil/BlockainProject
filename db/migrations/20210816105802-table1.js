'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('table1', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Mode_opération: {
        type: Sequelize.TEXT
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('table1');
  }
};