'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate(models) {

    }
  }

  SetTime.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
      },
      startTime: {
        type: DataTypes.DATE,
      },
      endTime: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'SetTime',
      tableName: 'setTime',
      timestamps: false,
    }
  );

  return SetTime;
};
