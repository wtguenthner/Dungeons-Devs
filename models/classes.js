const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Classes extends Model { }

Classes.init(
    {
        class_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: "users",
                key: "class_id"
            }
        },
        class_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'classes',
    }
)

module.exports = Classes
