'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'opérations', // name of Source model
      'id_Emetteur', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
          model: 'Emetteurs', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then(() => {
      // Payment hasOne Order
      return queryInterface.addColumn(
        'offre_Ps', // name of Target model
        'Id_opération', // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'opérations', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'opérations', // name of Source model
      'id_Emetteur' // key we want to remove
    )
    .then(() => {
      // remove Payment hasOne Order
      return queryInterface.removeColumn(
        'offre_Ps', // name of the Target model
        'Id_opération' // key we want to remove
      );
    });
}
};