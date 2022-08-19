import { default as probabilityCheck, getCardAction, getCardValue } from '../../utils/helpers.js';
import { Mage, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy } from './characterClasses.js';
import Card from "./card.js";

const music = document.getElementById("music");
music.volume = .2;

const card1 = document.getElementById('Card1');
const card1Title = document.getElementById("card1Title");
const card1Val = document.getElementById("card1Val");
const card2 = document.getElementById('Card2');
const card2Title = document.getElementById("card2Title");
const card2Val = document.getElementById("card2Val");
const card3 = document.getElementById('Card3');
const card3Title = document.getElementById("card3Title");
const card3Val = document.getElementById("card3Val");
const attack = document.querySelector("#playerAttackVal");
const defense = document.querySelector("#playerDefenseVal");
const evasion = document.querySelector("#playerEvasionVal");
const portrait = document.querySelector('#playerPortrait-container');
const player = document.querySelector("#playerUsername");
const username = sessionStorage.getItem("username");
player.innerHTML = `${username}`;
const playerName = document.querySelector("#playerName");
const bossAttack = document.getElementById('bossAttackVal');
const bossDefense = document.getElementById('bossDefenseVal');
const bossEvasion = document.getElementById('bossEvasionVal');
const bossPortrait = document.getElementById('bossPortrait');
const bossName = document.getElementById('bossName');
const playerHealthbar = document.getElementById('playerHealthCurrent');
const bossHealthbar = document.getElementById('bossHealthCurrent');
const turnOptions = document.getElementById('turnOptions-container');
const attackButton = document.getElementById('attackOption');
const defendButton = document.getElementById('defendOption');
const ruleBtn = document.getElementById('ruleBtn');
const ruleScroll = document.getElementById('howToPlay-container');

let playedCard;
let player1;
const boss = new Easy('Stanley', 8, 8, 4, 100, 'stanmanga78Docker');
console.log(boss);

card1.addEventListener('click', (e) => selectCard(e));
card2.addEventListener('click', (e) => selectCard(e));
card3.addEventListener('click', (e) => selectCard(e));
attackButton.addEventListener('click', () => attackTurn());
defendButton.addEventListener('click', () => defendTurn());

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

const getCharacterData = async (user_id) => {
    return await fetch(`/api/characters/${user_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            return data;
        });
};

// const createCharacter = async (class_id, character_name, user_id) => {
//     await fetch(`/api/characters/${data.class_id}`, {
//         method: "POST",
//         body: JSON.stringify({ character_name, user_id }),
//         headers: { "Content-Type": "application/json" },
//     });
// };

const setCharacterInfo = async () => {
    const currentUserData = await getUserData();
    // console.log(currentUserData.user_id);
    //Use this variable for attack/defense/evasion
    const currentCharacter = await getCharacterData(currentUserData.user_id);
    // console.log(currentCharacter)
    playerName.innerText = currentCharacter.character_name;
    attack.innerText = currentCharacter.attack;
    defense.innerText = currentCharacter.defense;
    evasion.innerText = currentCharacter.evasion;
    portrait.innerHTML = `<img id="playerPortrait" class="cardPortrait" src="${currentCharacter.class_avatar}" alt="player's character portrait">`
    
    const classType = (classID) => {
        let name = currentCharacter.character_name;
        let attack = currentCharacter.attack;
        let defense = currentCharacter.defense;
        let evasion = currentCharacter.evasion;
        let health = currentCharacter.health;
        let char_id = currentCharacter.character_id;
        if (classID === 1) {
            return new Archer(name, attack, defense, evasion, health, char_id);
        } else if (classID === 2) {
            return new Gunslinger(name, attack, defense, evasion, health, char_id);
        } else if (classID === 3) {
            return new Mage(name, attack, defense, evasion, health, char_id);
        } else if (classID === 4) {
            return new Paladin(name, attack, defense, evasion, health, char_id);
        } else if (classID === 5) {
            return new Reaper(name, attack, defense, evasion, health, char_id);
        } else if (classID === 6) {
            return new Rogue(name, attack, defense, evasion, health, char_id);
        }
    }
    // console.log(currentCharacter.class_id);
    console.log(`player: ${JSON.stringify(classType(currentCharacter.class_id))}`)
    return player1 = classType(currentCharacter.class_id)
};

const setBossInfo = async (boss) => {
    bossAttack.innerText = boss.actions.attack;
    bossDefense.innerText = boss.actions.defense;
    bossEvasion.innerText = boss.actions.evasion;
    bossName.innerText = boss.name;
}

const dealLeftCard = async () => {
    const cardONE = new Card(getCardAction(), getCardValue());
    card1Title.innerText = cardONE.action;
    card1Val.innerText = `+${cardONE.value}`;
    card1.style.scale = 1;
    card1.removeAttribute('disabled');
    return cardONE;
}
const dealMiddleCard = async () => {
    const cardTWO = new Card(getCardAction(), getCardValue());
    card2Title.innerText = cardTWO.action;
    card2Val.innerText = `+${cardTWO.value}`;
    card2.style.scale = 1;
    card2.removeAttribute('disabled');
    return cardTWO;
}
const dealRightCard = async () => {
    const cardTHREE = new Card(getCardAction(), getCardValue());
    card3Title.innerText = cardTHREE.action;
    card3Val.innerText = `+${cardTHREE.value}`;
    card3.style.scale = 1;
    card3.removeAttribute('disabled');
    return cardTHREE;
}

const disableCard = async (cardID) => {
    if (cardID === "Card1") {
        card1.setAttribute('disabled', '');
        card2.removeAttribute('disabled');
        card3.removeAttribute('disabled');
    } else if (cardID === "Card2") {
        card1.removeAttribute('disabled');
        card2.setAttribute('disabled', '');
        card3.removeAttribute('disabled');
    } else {
        card1.removeAttribute('disabled');
        card2.removeAttribute('disabled');
        card3.setAttribute('disabled', '');
    }
}

const scaleCard = async (cardID) => {
    if (cardID === "Card1") {
        card1.style.scale = 1.2;
        card2.style.scale = 1;
        card3.style.scale = 1;
    } else if (cardID === "Card2") {
        card1.style.scale = 1;
        card2.style.scale = 1.2;
        card3.style.scale = 1;
    } else {
        card1.style.scale = 1;
        card2.style.scale = 1;
        card3.style.scale = 1.2;
    }
}

const selectCard = async (e) => {
    let selectedCard = e.currentTarget;
    let cardAction = selectedCard.querySelector('h4').innerText;
    let cardValue = selectedCard.querySelector('h5').innerText.substring(1);

    if (cardAction === "attack") {
        attack.innerText = (parseInt(attack.innerText) + parseInt(cardValue));
        defense.innerText = player1.actions.defense;
        evasion.innerText = player1.actions.evasion;
        disableCard(selectedCard.id);
        scaleCard(selectedCard.id);
    } else if (cardAction === "defense") {
        defense.innerText = (parseInt(defense.innerText) + parseInt(cardValue));
        evasion.innerText = player1.actions.evasion;
        attack.innerText = player1.actions.attack;
        disableCard(selectedCard.id);
        scaleCard(selectedCard.id);
    } else {
        evasion.innerText = (parseInt(evasion.innerText) + parseInt(cardValue));
        defense.innerText = player1.actions.defense;
        attack.innerText = player1.actions.attack;
        disableCard(selectedCard.id);
        scaleCard(selectedCard.id);
    }

    turnOptions.classList.remove('hide');
    console.log(player1);
    return playedCard = { action: cardAction, value: cardValue, card_id: selectedCard.id };
}

const resetStats = async () => {
    console.log(playedCard);
    turnOptions.classList.add('hide');
    if (boss.actions.defense > 100) {
        boss.actions.defense = boss.actions.defense - 100;        
    }
    if (player1.actions.defense > 100) {
        player1.actions.defense = player1.actions.defense - 100;
    }
    if (playedCard.action === "attack") {
        attack.innerText = (parseInt(attack.innerText) - parseInt(playedCard.value));
    } else if (playedCard.action === "defense") {
        defense.innerText = (parseInt(defense.innerText) - parseInt(playedCard.value));
    } else {
        evasion.innerText = (parseInt(evasion.innerText) - parseInt(playedCard.value));
    }
}

const redraw = async () => {
    if (playedCard.card_id === "Card1") {
        dealLeftCard();
    } else if (playedCard.card_id === "Card2") {
        dealMiddleCard();
    } else {
        dealRightCard();
    }
}

const attackTurn = async () => {
    const attackAudio = new Audio("./assets/audio/attack.mp3");
    attackAudio.play();
    player1.updateAction(playedCard.action, playedCard.value);
    boss.evade();
    player1.attack(boss, bossHealthbar);
    player1.evade();
    boss.bossTurn(boss, player1, playerHealthbar);
    player1.resetAction(playedCard.action, playedCard.value);
    console.log(player1);
    console.log(boss);
    resetStats();
    redraw();
}

const defendTurn = async () => {
    const defendAudio = new Audio("./assets/audio/defense.mp3");
    defendAudio.play();
    player1.updateAction(playedCard.action, playedCard.value);
    player1.defend();
    player1.evade();
    boss.bossTurn(boss, player1, playerHealthbar);
    player1.resetAction(playedCard.action, playedCard.value);
    console.log(player1);
    console.log(boss);
    resetStats();
    redraw();
}

// const bossTurn = async (opponent, player) =>  {
//     if (opponent.hp <= (opponent.hp * .75)) {
//         let probOfAttack = probabilityCheck(50, 38);
//         if (probOfAttack === 1) {
//             opponent.attack(player);

//         } else if (probOfAttack === 10) {
//             opponent.defend();
//         }
//     } else if (opponent.hp <= (opponent.hp * .5)) {
//         let probOfAttack = probabilityCheck(50, 20);
//         if (probOfAttack === 1) {
//             opponent.attack(player);

//         } else if (probOfAttack === 10) {
//             opponent.defend();
//         }
//     } else {
//         opponent.attack(player);
//     }
// }

const battle = async (player, opponent) => {
    //select card to play
    //on event "click" emphasis goes to selected card (maybe by enlarging it), and play buttons(attack, defend) become visible.
    //on different card "click" emphasis changes to newly selected card
    //click play button
    // switch (cardAction) {
    //     case "attack":
    //         player.attack += cardValue;
    //         //print changed value to player card on DOM
    //         break;
    //     case "defense":
    //         player.defense += cardValue;
    //         //print changed value to player card on DOM
    //         break;
    //     case "evasion":
    //         player.evasion += cardValue;
    //         //print changed value to player card on DOM
    //         break;
    // }
    // if (e.attack === "attack") {
    //     player.attack(opponent);
    //     opponent.bossTurn(opponent, player);
    // } else if (e.defend === "defend") {
    //     player.defend();
    //     opponent.bossTurn(opponent, player);
    // }
};




const init = async () => {
    setCharacterInfo();
    setBossInfo(boss);
    dealLeftCard();
    dealMiddleCard();
    dealRightCard();
    battle(player1, boss);
};
init();

// let Kevin = new Paladin("Kevin", 8, 7, 5, 100);
// let boss = new Easy("Mob Assassin", 7, 6, 7, 100);
// battle(Kevin, boss)

ruleBtn.onclick = function() {
    if (ruleScroll.style.visibility === "hidden") {
        ruleScroll.style.visibility = "visible";
    } else {
        ruleScroll.style.visibility = "hidden";
    }
};
