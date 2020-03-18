'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_weather = sequelize.define('user_weather', {
    user_id: DataTypes.STRING,
    city: DataTypes.STRING,
    degree: DataTypes.STRING
  }, {});
  user_weather.associate = function(models) {
    user_weather.belongsTo(models.user_accounts, {
      as: 'user_accounts',
      foreignKey: 'weather_id'
    })
  };
  return user_weather;
};