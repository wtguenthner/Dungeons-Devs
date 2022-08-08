const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Reaper extends Model {}

Reaper.init(
    {
        id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        attack:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 7,
        },
        defense:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 7,
        },
        evasion:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 6,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reaper',
    }
)

module.exports = Reaper;