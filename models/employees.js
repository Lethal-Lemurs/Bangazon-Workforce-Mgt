'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employees = sequelize.define('Employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    department: DataTypes.INTEGER
  }, {timestamps: false});

  // Employees.associate = (models) => {

  // };

  return Employees;
};