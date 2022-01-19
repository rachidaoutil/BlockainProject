'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TCN_primes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nb_titres: {
        type: Sequelize.BIGINT
      },
      taux: {
        type: Sequelize.STRING
      },
      maturité: {
        type: Sequelize.STRING
      },
      valeur_nom: {
        type: Sequelize.BIGINT
      },
      date_émission: {
        type: Sequelize.DATE
      },
      montant_émis: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('TCN_primes');
  }
};