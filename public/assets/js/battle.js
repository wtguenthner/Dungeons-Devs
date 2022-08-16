// import { probabilityCheck, getCardAction, getCardValue } from '../../../utils/helpers.js';
import Card from "./card.js";

const card1Title = document.getElementById("card1Title");
const card1Val = document.getElementById("card1Val");
const card2Title = document.getElementById("card2Title");
const card2Val = document.getElementById("card2Val");
const card3Title = document.getElementById("card3Title");
const card3Val = document.getElementById("card3Val");

const player = document.querySelector("#playerUsername");
const username = sessionStorage.getItem("username");
player.innerHTML = `${username}`;
const playerName = document.querySelector("#playerName");

const init = async () => {
  const currentUserData = await getUserData();

  //Use this variable for attack/defense/evasion
  const currentCharacter = await getClassData(currentUserData.class_id);
console.log(currentCharacter)
  playerName.innerHTML = currentCharacter.character_name;
};

const getUserData = async () => {
 return await fetch(`/api/users/${username}`, {
    method: "GET",
    // body: JSON.stringify({ username}),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      
      return data;
    });
   
};

const getClassData = async (class_id) => {
  return await fetch(`/api/characters/${class_id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    });
};

const createCharacter = async (class_id, character_name, user_id) => {
  await fetch(`/api/characters/${data.class_id}`, {
    method: "POST",
    body: JSON.stringify({ character_name, user_id }),
    headers: { "Content-Type": "application/json" },
  });
};

const setCharacterName = async () => {
  console.log(data.character_name);
  const character_name = data.character_name;
  playerName.innerHTML = character_name;
  const user_id = data.user_id;
};

init();
// setCharacterName();
const battle = async (player, opponent) => {
  //draw 3 cards
  //card.printCard() returns [action, value] that needs to be printed on card 1
  const card1 = new Card(getCardAction(), getCardValue());
  card1Title.innerText = card1.action;
  card1Val.innerText = `+${card1.value}`;
  //print card1.action and card1.value to DOM via handlebars
  //card.printCard() returns [action, value] that needs to be printed on card 2
  const card2 = new Card(getCardAction(), getCardValue());
  card2Title.innerText = card2.action;
  card2Val.innerText = `+${card2.value}`;
  //print card2.action and card2.value to DOM via handlebars
  //card.printCard() returns [action, value] that needs to be printed on card 3
  const card3 = new Card(getCardAction(), getCardValue());
  card3Title.innerText = card3.action;
  card3Val.innerText = `+${card3.value}`;
  //print card3.action and card3.value to DOM via handlebars

  //select card to play
  //on event "click" emphasis goes to selected card (maybe by enlarging it), and play buttons(attack, defend) become visible.
  //on different card "click" emphasis changes to newly selected card
  //click play button
  switch (cardAction) {
    case "attack":
      player.attack += cardValue;
      //print changed value to player card on DOM
      break;
    case "defense":
      player.defense += cardValue;
      //print changed value to player card on DOM
      break;
    case "evasion":
      player.evasion += cardValue;
      //print changed value to player card on DOM
      break;
  }
  if (e.attack === "attack") {
    player.attack(opponent);
    opponent.bossTurn(opponent, player);
  } else if (e.defend === "defend") {
    player.defend();
    opponent.bossTurn(opponent, player);
  }
};

// let Kevin = new Paladin("Kevin", 8, 7, 5, 100);
// let boss = new Easy("Mob Assassin", 7, 6, 7, 100);
// battle(Kevin, boss)
