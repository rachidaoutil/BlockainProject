'use strict';

// Test environment settings
let config = {};

// Use special purpose test database
config.databaseUrl = '';

module.exports = config;


queryInterface.addConstraint('ipo_ferme', {
    fields: ['column_name'],
    type: 'foreign key',
    name: 'custom_fkey_constraint_name', // optional
    references: {
      table: 'target_table_name',
      field: 'target_column_name'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
