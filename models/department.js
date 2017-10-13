'use strict';
module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING
  }, {timestamps: false});

  // js
  Department.associate = function(models) {
    Department.hasMany(models.Employee, {
      foreignKey: 'departmentId',
      as: 'Employees',
      through: 'EmployeeDeptartment'
    });
  };

  return Department;
};