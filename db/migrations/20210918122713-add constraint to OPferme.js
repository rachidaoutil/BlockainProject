'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IPO_FERMEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IntroductionId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
          model: 'introduction_bourses', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
      ,
      nbactions_c: {
        type: Sequelize.BIGINT
      },
      nbactions_e: {
        type: Sequelize.BIGINT
      },
      prix_c: {
        type: Sequelize.BIGINT
      },
      prix_e: {
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
    await queryInterface.dropTable('IPO_FERMEs');
  }
};
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
