'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('programme_rachats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_démarr: {
        type: Sequelize.DATE
      },
      date_échéa: {
        type: Sequelize.DATE
      },
      nbactions: {
        type: Sequelize.BIGINT
      },
      prixachat: {
        type: Sequelize.BIGINT
      },
      prixvente: {
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
    await queryInterface.dropTable('programme_rachats');
  }
};