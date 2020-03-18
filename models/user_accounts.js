'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_accounts = sequelize.define('user_accounts', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    g_id:DataTypes.TEXT
  }, {});
  user_accounts.associate = function(models) {
    // user_accounts.belongsTo(models.user_news, { foreignKey: 'news_id',  as: 'user_news' });
    // user_accounts.belongsTo(models.user_notes, { foreignKey: 'note_id',  as: 'user_notes' });
    // user_accounts.belongsTo(models.user_reminders, { foreignKey: 'reminders_id',  as: 'user_reminders' });
    // user_accounts.belongsTo(models.user_weather, { foreignKey: 'waether_id', as: 'user_weather' });
    // user_accounts.belongsTo(models.user_stock, { foreignKey: 'stock_id',  as: 'user_stock' });
    
  };
  return user_accounts;
};