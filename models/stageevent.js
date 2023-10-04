'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  StageEvent.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
      },
      stageId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stageEvent',
    }
  );

  return StageEvent;
};
