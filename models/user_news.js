'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_news = sequelize.define('user_news', {
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    language: DataTypes.STRING
  }, {});
  user_news.associate = function(models) {
    user_news.belongsTo(models.user_accounts, {
      as: 'user_accounts',
      foreignKey: 'news_id'
    })
  };
  return user_news;
};