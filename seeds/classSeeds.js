import { Classes } from "../models/classes.js";

const classData = [
  {
    class_id: 1,
    class_name: "Archer",
    attack: 6,
    defense: 6,
    evasion: 8,
    health: 100,
    class_avatar: "./assets/img/archer.jpeg",
  },
  {
    class_id: 2,
    class_name: "Gunslinger",
    attack: 8,
    defense: 6,
    evasion: 6,
    health: 100,
    class_avatar: "./assets/img/gunslinger.png",
  },
  {
    class_id: 3,
    class_name: "Mage",
    attack: 7,
    defense: 6,
    evasion: 7,
    health: 100,
    class_avatar: "./assets/img/mage.png",
  },
  {
    class_id: 4,
    class_name: "Paladin",
    attack: 8,
    defense: 7,
    evasion: 5,
    health: 100,
    class_avatar: "./assets/img/paladin.png",
  },
  {
    class_id: 5,
    class_name: "Reaper",
    attack: 7,
    defense: 7,
    evasion: 6,
    health: 100,
    class_avatar: "./assets/img/summoner.png",
  },
  {
    class_id: 6,
    class_name: "Rogue",
    attack: 8,
    defense: 4,
    evasion: 8,
    health: 100,
    class_avatar: "./assets/img/assassin.png",
  },
  {
    class_id: 7,
    class_name: "Stanman",
    attack: 7,
    defense: 6,
    evasion: 7,
    health: 100,
    class_avatar: "./assets/img/Stanmang79.png",
  },
];

const seedClasses = () => Classes.bulkCreate(classData);

export default seedClasses;
