'use strict';
module.exports = (sequelize, DataTypes) => {
  var Departments = sequelize.define('Departments', {
    name: DataTypes.STRING
  }, {timestamps: false});
  return Departments;
};