'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_notes = sequelize.define('user_notes', {
    user_id: DataTypes.STRING,
    note: DataTypes.STRING
  }, {});
  user_notes.associate = function(models) {
    user_notes.belongsTo(models.user_accounts, {
      as: 'user_accounts',
      foreignKey: 'note_id'
    })
  };
  return user_notes;
};