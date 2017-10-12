'use strict';
module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING
  }, {timestamps: false});

  Department.associate = function(models) {
    Department.hasMany(models.Employee, {
      foreignKey: 'departmentId'
    });
  };

  return Department;
};