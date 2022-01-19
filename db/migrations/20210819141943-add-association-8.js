'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'TCNs', // name of Target model
        'Id_opération', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          references: {
            model: 'opérations', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'TCNs', // name of the Target model
        'Id_opération' // key we want to remove
      );
    }
};