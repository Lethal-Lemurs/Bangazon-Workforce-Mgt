'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define('Computer', {
    manufacturer: DataTypes.STRING,
    make: DataTypes.STRING,
    purchase_date: DataTypes.DATEONLY
  }, {timestamps: false});

  Computer.associate = function(models) {
    Computer.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      as: 'Employees Computer',
      through: 'EmployeeComputer'
    });
  };

  return Computer;
};
