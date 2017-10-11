'use strict';

let { computers } = require('./data/computer-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Computers', computers, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Computers', null, {});
  }
};
