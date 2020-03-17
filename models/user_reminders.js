'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_reminders = sequelize.define('user_reminders', {
    user_id: DataTypes.STRING,
    reminder: DataTypes.STRING
  }, {});
  user_reminders.associate = function(models) {
    user_reminders.belongsTo(models.user_accounts, {
      as: 'user_accounts',
      foreignKey: 'reminders_id'
    })
  };
  return user_reminders;
};