'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Emetteur', {
      id_E: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      nationalité: {
        type: Sequelize.STRING
      },
      catégorie: {
        type: Sequelize.STRING
      },
      secteur: {
        type: Sequelize.STRING
      },
      SFNF: {
        type: Sequelize.STRING
      },
      code_ISN: {
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Emetteur');
  }
};
