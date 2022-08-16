import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Classes extends Model {}

Classes.init(
  {
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    evasion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
    },
    class_avatar: {
      type: DataTypes.BLOB("long"),
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "classes",
  }
);

export default Classes;
