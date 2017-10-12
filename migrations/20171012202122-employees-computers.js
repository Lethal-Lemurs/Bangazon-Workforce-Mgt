'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployeesComputers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      computerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Computers',
          key: 'id'    
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'id'    
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateAssigned: {
        type: Sequelize.DATE
      },
      dateReturned: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmployeesComputers');
  }
};
