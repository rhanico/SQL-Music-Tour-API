const { Sequelize, DataTypes, Models } = require ( "sequelize" )

const sequelize = new Sequelize(process.env.PG_URI)

// MDOEL

class Band extends Model{}

Band.init( {
    band_id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    time_start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Band",
    tableName: "band",
    timeStamps: false
} )

module.exports = Band