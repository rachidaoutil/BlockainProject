'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('opérations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nature_titre: {
        type: Sequelize.STRING
      },
      nature_opération: {
        type: Sequelize.STRING
      },
      type_opération: {
        type: Sequelize.STRING
      },
      numéro_VISA: {
        type: Sequelize.STRING
      },
      date_visa: {
        type: Sequelize.DATE
      },
      oraganisme_conseil: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('opérations');
  }
};