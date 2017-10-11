'use strict';

let { departments } = require('./data/department-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Departments', departments, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Departments', null, {});
  }
};