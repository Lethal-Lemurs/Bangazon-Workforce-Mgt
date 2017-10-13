'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
  }, {timestamps: false});

  // js
  Employee.associate = function(models) {
    Employee.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      as: 'Employees Department',
      through: 'EmployeeDeptartment',
      onDelete: 'CASCADE'
    });
  };

  Employee.associate = function(models) {
    Employee.hasOne(models.Computer, {
      foreignKey: 'computerId',
      as: 'Employees Computer',
      through: 'EmployeeComputer',
      onDelete: 'CASCADE'
    });
  };

  return Employee;
};


