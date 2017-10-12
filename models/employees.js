'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    department: DataTypes.INTEGER
  }, {timestamps: false});

  // js
  Employee.associate = function(models) {
    Employee.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      onDelete: 'CASCADE'
    });
  };

  return Employee;
};


