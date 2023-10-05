'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate(models) {

    }
  }

  Stage.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Stage',
      tableName: 'stage',
      timestamps: false,
    }
  );

  return Stage;
};
