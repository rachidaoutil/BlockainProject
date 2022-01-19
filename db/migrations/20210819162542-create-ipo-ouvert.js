'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IPO_OUVERTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nbaction_cé: {
        type: Sequelize.BIGINT
      },
      nbaction_émis: {
        type: Sequelize.BIGINT
      },
      prixmin: {
        type: Sequelize.BIGINT
      },
      prixmax: {
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
    await queryInterface.dropTable('IPO_OUVERTs');
  }
};