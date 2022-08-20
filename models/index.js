import User from "./User.js";
import Classes from "./classes.js";
import Characters from "./characters.js";

User.hasMany(Characters, {
  sourceKey: "character_name",
  foreignKey: "character_name",
});

Characters.belongsTo(User, {
  targetKey: "user_id",
  foreignKey: "user_id",
});

Characters.hasOne(Classes, {
  foreignKey: "class_id",
});

export { User as default, Classes, Characters };
