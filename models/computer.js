'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define('Computer', {
    manufacturer: DataTypes.STRING,
    make: DataTypes.STRING,
    purchase_date: DataTypes.DATEONLY
  }, {timestamps: false});
  // js
  Computer.associate = function(models) {
    Computer.belongsToMany(models.Employee, {
      through: 'EmployeesComputers'
    });
  }
  return Computer;
};
