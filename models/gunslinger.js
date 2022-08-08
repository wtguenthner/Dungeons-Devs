const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Gunslinger extends Model {}

Gunslinger.init(
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
            defaultValue: 8,
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
            defaultValue: 6,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'gunslinger',
    }
)

module.exports = Gunslinger;