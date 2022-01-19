'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'IPO_OUVERTs', // name of Target model
        'Id_IPO', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          references: {
            model: 'introduction_bourses', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'IPO_OUVERTs', // name of the Target model
        'Id_IPO' // key we want to remove
      );
    }
};