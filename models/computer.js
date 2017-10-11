'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define('Computers', {
    manufacturer: DataTypes.STRING,
    make: DataTypes.STRING,
    purchase_date: DataTypes.DATEONLY
  }, {timestamps: false});

  // Computer.associate = (models) => {

  // };

  return Computers;
};
