let characters = [
  { portrait: "./assets/img/warrior.png", name: "Warrior" },
  { portrait: "./assets/img/mage.png", name: "Mage" },
  { portrait: "./assets/img/archer.jpeg", name: "Archer" },
  { portrait: "./assets/img/summoner.png", name: "Summoner" },
  { portrait: "./assets/img/barbarian.png", name: "Barbarian" },
  { portrait: "./assets/img/druid.png", name: "Druid" },
  { portrait: "./assets/img/gunslinger.png", name: "Gunslinger" },
  { portrait: "./assets/img/paladin.png", name: "Paladin" },
  { portrait: "./assets/img/assassin.png", name: "Assassin" },
];

const player1_attack = document.querySelector(".character1_attack");
const player1_defense = document.querySelector(".character1_defense");
const player2_attack = document.querySelector(".character2_attack");
const player2_defense = document.querySelector(".character2_defense");
const player1_scoreDisplay = document.querySelector(".player1_score");
const player2_scoreDisplay = document.querySelector(".player2_score");

let player1_score = 0;
let player2_score = 0;

const startButton = document.querySelector("#start");
const fightButton = document.querySelector("#fight");
const portrait1 = document.querySelector("#portrait1");
const portrait2 = document.querySelector("#portrait2");
const name1 = document.querySelector(".character1_name");
const name2 = document.querySelector(".character2_name");

let attack1 = Math.floor(Math.random() * 6 + 1);
let defend1 = Math.floor(Math.random() * 10 + 1);
let attack2 = Math.floor(Math.random() * 6 + 1);
let defend2 = Math.floor(Math.random() * 10 + 1);

const start = () => {
  let x1 = Math.floor(Math.random() * 9);
  let x2 = Math.floor(Math.random() * 9);
  portrait1.style.backgroundImage = `url(${characters[x1].portrait})`;
  portrait2.style.backgroundImage = `url(${characters[x2].portrait})`;
  name1.innerHTML = `${characters[x1].name}`;
  name2.innerHTML = `${characters[x2].name}`;

  player1_attack.innerHTML = `&nbsp;${attack1}&nbsp;`;
  player1_defense.innerHTML = `&nbsp;${defend1}&nbsp;`;

  player2_attack.innerHTML = `&nbsp;${attack2}&nbsp;`;
  player2_defense.innerHTML = `&nbsp;${defend2}&nbsp;`;
  startButton.setAttribute("style", "display:none");
  fightButton.setAttribute("style", "display:flex");

  player1_scoreDisplay.innerHTML = `<h1>Wins: ${player1_score}</h1>`;
  player2_scoreDisplay.innerHTML = `<h1>Wins: ${player2_score}</h1>`;
};

const fight = () => {
  defend1 = defend1 - attack2;
  defend2 = defend2 - attack1;
  player1_defense.innerHTML = `&nbsp;${defend1}&nbsp;`;
  player2_defense.innerHTML = `&nbsp;${defend2}&nbsp;`;
  if (defend1 < 1) {
    portrait1.style.backgroundImage = "url(./assets/img/skull.png)";
    player2_score++;
    startButton.setAttribute("style", "display:flex");
    fightButton.setAttribute("style", "display:none");
    attack1 = Math.floor(Math.random() * 6 + 1);
    defend1 = Math.floor(Math.random() * 10 + 1);
    name1.innerHTML='';
    player1_attack.innerHTML='';
    player1_defense.innerHTML='';
  }
  if (defend2 < 1) {
    portrait2.style.backgroundImage = "url(./assets/img/skull.png)";
    player1_score++;
    startButton.setAttribute("style", "display:flex");
    fightButton.setAttribute("style", "display:none");
    attack2 = Math.floor(Math.random() * 6 + 1);
    defend2 = Math.floor(Math.random() * 10 + 1);
    name2.innerHTML='';
    player2_attack.innerHTML='';
    player2_defense.innerHTML='';
  }
};
