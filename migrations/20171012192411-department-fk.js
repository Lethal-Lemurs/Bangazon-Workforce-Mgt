'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn( 'Employees', 'departmentId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Departments',
        key: 'id',
        as: 'departmentId'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'Employees', 'departmentId' );
  }
};
