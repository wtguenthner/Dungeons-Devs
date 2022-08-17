


import {Model, DataTypes, Sequelize} from 'sequelize';
import sequelize from '../config/connection.js';  

class Character extends Model {
    constructor(name) {
        this.name = name;
        hasProp = false;
    }

    takeDamage(input) {
        this.health -= input;
    }

    updateHealth(healthbar, value) {
        healthbar.querySelector('playerHealthCurrent').style.width = `(${this.health} - ${value})%`
    }

    attack(opponent) {
        const attackProb = probCheck(50, 47);

        switch (attackProb) {
            case attackProb === 1:
                opponent.takeDamage(this.attack - opponent.defense)
                break;
            case attackProb === 10:
                opponent.takeDamage((this.attack * 1.8) - opponent.defense)
                attackProb.message === 'Critical Hit!'
                break;
        }
        return attackProb
    }

    defend() {
        const defendProb = probCheck(50, 35, 47);

        switch (defendProb) {
            case defendProb === 1:
                this.defense += (this.defense * .5)
                break;
            case defendProb === 2:
                this.defense += (this.defense * .75)
                break;
            case defendProb === 10:
                this.defense += this.defense
                break;
        }
    }
    
    evade() {
        return probCheck(40, this.evasion);
    }
}

Character.init(
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
            allowNull: false,
          
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

export default Character;