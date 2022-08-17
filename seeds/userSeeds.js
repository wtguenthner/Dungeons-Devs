import  User from "../models/User.js";

const userData = [];

const seedUsers = () => User.bulkCreate(characterData);

export default seedUsers;
