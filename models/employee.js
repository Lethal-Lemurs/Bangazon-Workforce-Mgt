'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
  }, 
  {underscored: true, timestamps: false});  

  // js
  Employee.associate = function(models) {
    Employee.hasOne(models.Computer, {
      foreignKey: 'computerId',
      as: 'Employees Computer',
      through: 'EmployeeComputer',
      onDelete: 'CASCADE'
    });
  };
  Employee.associate = function(models) {
    Employee.hasOne(models.Department, {
      foreignKey: 'id',
      // as: 'Employees Department',
      // through: 'EmployeeDepartment',
      onDelete: 'CASCADE'
    });
  };

  return Employee;
};


