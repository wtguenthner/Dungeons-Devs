import { Characters } from "../models/characters.js";

const characterData = [];

const seedCharacters = () => Characters.bulkCreate(characterData);

export default seedCharacters;
