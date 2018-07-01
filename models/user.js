'use strict';
module.exports = (sequelize, DataTypes) => {
  var USER = sequelize.define('USER', {
    user_id: DataTypes.STRING,
    password: DataTypes.STRING,
    user_name: DataTypes.STRING
  }, {
    underscored: true,
  });
  USER.associate = function(models) {
    // associations can be defined here
  };
  return USER;
};