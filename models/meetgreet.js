'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate(models) {
    
    }
  }

  MeetGreet.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      time: {
        type: DataTypes.DATE,
        allowNull: false, 
      },
    },
    {
      sequelize,
      modelName: 'MeetGreet',
      tableName: 'meetGreet', 
      timestamps: false, 
    }
  );

  return MeetGreet;
};
