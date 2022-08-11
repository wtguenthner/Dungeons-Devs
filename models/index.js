// const { Model } = require('sequelize/types');


import User from './User.js';
import Classes from './classes.js';
import Characters from './characters.js'


User.hasMany(Characters, {
    foreignKey: 'character_name'
})

User.hasMany(Classes, {
    foreignKey: 'class_id'
})

Characters.belongsTo(User, {
    foreignKey: 'character_name'
     
})

Classes.belongsTo(User, {
    foreignKey: 'class_id'
})



export { User as default, Classes, Characters }