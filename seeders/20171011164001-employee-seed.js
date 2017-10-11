'use strict';

let { employees } = require('./data/employee-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Employees', employees, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
