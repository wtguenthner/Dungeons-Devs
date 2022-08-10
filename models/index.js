// const { Model } = require('sequelize/types');
const User = require('./User');
const Classes = require('./classes')
const Characters = require('./characters')


User.hasMany(Characters. {
    foreignKey: 'character_name'
})

User.hasMany(Classes {
    foreignKey: 'class_id'
})

Characters.belongsTo(User {
    foreignKey: 'character_name'
})

Classes.belongsTo(User {
    foreignKey: 'class_id'
})

module.exports = { User, Classes, Characters }