'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TCNs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      nb_titres: {
        type: Sequelize.BIGINT
      },
      type_taux: {
        type: Sequelize.STRING
      },
      maturité: {
        type: Sequelize.STRING
      },
      prime_risque: {
        type: Sequelize.STRING
      },
      remboursement: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TCNs');
  }
};