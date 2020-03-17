'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_stock = sequelize.define('user_stock', {
    user_id: DataTypes.STRING,
    compay_symbol: DataTypes.STRING,
    currency_name: DataTypes.STRING
  }, {});
  user_stock.associate = function(models) {
    user_stock.belongsTo(models.user_accounts, {
      as: 'user_accounts',
      foreignKey: 'stock_id'
    })
  };
  return user_stock;
};