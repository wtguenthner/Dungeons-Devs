const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Character extends Model { }

Character.init(
    {
        character_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        character_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            references: {
                model: "user",
                key: "character_name"
            }
        },
        attack:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defense:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        evasion:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        health:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        wins:
        {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        losses:
        {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
)

module.exports = Character