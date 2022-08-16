


import {Model, DataTypes, Sequelize} from 'sequelize';
import sequelize from '../config/connection.js';  

class Characters extends Model { }

Characters.init(
    {
        character_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        user_id:
        {
            type: DataTypes.UUID,
            allowNull: true,
          
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        character_name:
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
        wins:
        {
            type: DataTypes.INTEGER,
            allowNull:true,
            defaultValue:0
        },
        losses:
        {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        class_avatar: {
            type: DataTypes.STRING,
            allowNull:true
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'characters',
    }
)

export default Characters;