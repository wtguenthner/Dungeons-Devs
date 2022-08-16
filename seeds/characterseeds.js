import  Character  from "../models/characters.js";

const characterData = [];

const seedCharacters = () => Character.bulkCreate(characterData);

export default seedCharacters;
