const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Rogue extends Model {}

Rogue.init(
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
            defaultValue: 6,
        },
        evasion:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 7,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rogue',
    }
)

module.exports = Rogue;