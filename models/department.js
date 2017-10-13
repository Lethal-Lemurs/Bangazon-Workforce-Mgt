'use strict';
module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING
  }, 
  {underscored: true, timestamps: false});

  // js
  Department.associate = function(models) {
    Department.hasMany(models.Employee);
  };

  return Department;
};