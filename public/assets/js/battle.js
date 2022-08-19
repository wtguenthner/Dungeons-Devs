import { default as probabilityCheck, getCardAction, getCardValue } from '../../utils/helpers.js';
import { Mage, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy } from './characterClasses.js';
import Card from "./card.js";

const music = document.getElementById("music");
music.volume = .2;

const card1 = document.getElementById('Card1');
const card1Title = document.getElementById("card1Title");
const card1Val = document.getElementById("card1Val");
const card1Icon = document.getElementById('card1Icon');
const card2 = document.getElementById('Card2');
const card2Title = document.getElementById("card2Title");
const card2Val = document.getElementById("card2Val");
const card2Icon = document.getElementById('card2Icon');
const card3 = document.getElementById('Card3');
const card3Title = document.getElementById("card3Title");
const card3Val = document.getElementById("card3Val");
const card3Icon = document.getElementById('card3Icon');
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
const bossPortrait = document.getElementById('bossPortrait-container');
const bossName = document.getElementById('bossName');
const playerHealthbar = document.getElementById('playerHealthCurrent');
const bossHealthbar = document.getElementById('bossHealthCurrent');
const turnOptions = document.getElementById('turnOptions-container');
const attackButton = document.getElementById('attackOption');
const defendButton = document.getElementById('defendOption');
const playerDeck = document.getElementById('playerDeck');
const rematchBtn = document.getElementById('rematch');
const playerMessage = document.getElementById('playerMessage-container');
const bossMessage = document.getElementById('bossMessage-container');



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
    const currentCharacter = await getCharacterData(currentUserData.user_id);
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
    // console.log(`player: ${JSON.stringify(classType(currentCharacter.class_id))}`)
    return player1 = classType(currentCharacter.class_id)
};

const setBossInfo = async (boss) => {
    bossAttack.innerText = boss.actions.attack;
    bossDefense.innerText = boss.actions.defense;
    bossEvasion.innerText = boss.actions.evasion;
    bossName.innerText = boss.name;
    bossPortrait.innerHTML = `<img id="bossPortrait" class="cardPortrait" src="./assets/img/Stanmanga79.png" alt="boss portrait"></img>`
}

const dealLeftCard = async () => {
    const cardONE = new Card(getCardAction(), getCardValue());
    card1Title.innerText = cardONE.action;
    card1Val.innerText = `+${cardONE.value}`;
    card1.style.scale = 1;
    card1.removeAttribute('disabled');
    switch (cardONE.action) {
        case "attack":
            card1Icon.innerHTML = `<img class="cardIcon" src="./assets/img/AttackIcon.png">`
            break;
        case "defense":
            card1Icon.innerHTML = `<img class="cardIcon" src="./assets/img/DefenseIcon.png">`
            break;
        case "evasion":
            card1Icon.innerHTML = `<img class="cardIcon" src="./assets/img/EvasionIcon.png">`
            break;
    }
    return cardONE;
}
const dealMiddleCard = async () => {
    const cardTWO = new Card(getCardAction(), getCardValue());
    card2Title.innerText = cardTWO.action;
    card2Val.innerText = `+${cardTWO.value}`;
    card2.style.scale = 1;
    card2.removeAttribute('disabled');
    switch (cardTWO.action) {
        case "attack":
            card2Icon.innerHTML = `<img class="cardIcon" src="./assets/img/AttackIcon.png">`
            break;
        case "defense":
            card2Icon.innerHTML = `<img class="cardIcon" src="./assets/img/DefenseIcon.png">`
            break;
        case "evasion":
            card2Icon.innerHTML = `<img class="cardIcon" src="./assets/img/EvasionIcon.png">`
            break;
    }
    return cardTWO;
}
const dealRightCard = async () => {
    const cardTHREE = new Card(getCardAction(), getCardValue());
    card3Title.innerText = cardTHREE.action;
    card3Val.innerText = `+${cardTHREE.value}`;
    card3.style.scale = 1;
    card3.removeAttribute('disabled');
    switch (cardTHREE.action) {
        case "attack":
            card3Icon.innerHTML = `<img class="cardIcon" src="./assets/img/AttackIcon.png">`
            break;
        case "defense":
            card3Icon.innerHTML = `<img class="cardIcon" src="./assets/img/DefenseIcon.png">`
            break;
        case "evasion":
            card3Icon.innerHTML = `<img class="cardIcon" src="./assets/img/EvasionIcon.png">`
            break;
    }
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
    player1.resetStats();
    let selectedCard = e.currentTarget;
    let cardAction = selectedCard.querySelector('h4').innerText;
    let cardValue = selectedCard.querySelector('h5').innerText.substring(1);
    player1.updateAction(cardAction, cardValue);
    renderStats();
    disableCard(selectedCard.id);
    scaleCard(selectedCard.id);
    turnOptions.classList.remove('hide');
    console.log(player1);
    return playedCard = { action: cardAction, value: cardValue, card_id: selectedCard.id };
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

const renderStats = async () => {
    attack.innerText = player1.actions.attack;
    defense.innerText = player1.actions.defense;
    evasion.innerText = player1.actions.evasion;
}

// const clearPlayerMessage = async () => {
//     while (playerMessage.firstChild) {
//         playerMessage.removeChild(playerMessage.firstChild);
//     }
// }
// const clearBossMessage = async () => {
//     while (bossMessage.firstChild) {
//         bossMessage.removeChild(bossMessage.firstChild);
//     }
// }

// const checkForPlayerDefenseBoost = async () => {
//     if (playerMessage.querySelector('#boostedDefense')) {
//         return playerDefenseBoost = 2;
//     } else if (playerMessage.querySelector('#boostederDefense')) {
//         return playerDefenseBoost = 5;
//     }
// }
// const checkForBossDefenseBoost = async () => {
//     if (bossMessage.querySelector('#boostedDefense')) {
//         return bossDefenseBoost = 2;
//     } else if (bossMessage.querySelector('#boostederDefense')) {
//         return bossDefenseBoost = 5;
//     }
// }

const checkHealth = async () => {
    if (player1.hp <= 0) {
        PlayerEndGame(player1);
    } else if (boss.hp <= 0) {
        BossEndGame(boss);
    } else {
        return;
    }
}

const BossEndGame = async (fighter) => {
    bossPortrait.innerHTML = `<img id="bossPortrait" class="cardPortrait" src="./assets/img/DnDevSkull.png" alt="boss death portrait"></img>`;
    playerDeck.classList.add('hide');
    rematchBtn.classList.remove('hide');
}
const PlayerEndGame = async (fighter) => {
    portrait.innerHTML = `<img id="playerPortrait" class="cardPortrait" src="./assets/img/DnDevSkull.png" alt="player death portrait">`;
    playerDeck.classList.add('hide');
    rematchBtn.classList.remove('hide');
}

const attackTurn = async () => {
    const attackAudio = new Audio("./assets/audio/attack.mp3");
    attackAudio.play();
    boss.evade();
    player1.attack(boss, bossHealthbar, player1);
    checkHealth();
    boss.resetStats();
    player1.evade();
    turnOptions.classList.add('hide');
    boss.bossTurn(boss, player1, playerHealthbar);
    player1.resetAction(playedCard.action, playedCard.value);
    player1.resetStats();
    renderStats();
    redraw();
}

const defendTurn = async () => {
    const defendAudio = new Audio("./assets/audio/defense.mp3");
    defendAudio.play();
    player1.defend();
    boss.resetStats();
    player1.evade();
    turnOptions.classList.add('hide');
    boss.bossTurn(boss, player1, playerHealthbar);
    player1.resetAction(playedCard.action, playedCard.value);
    player1.resetStats();
    renderStats();
    redraw();
}

const init = async () => {
    setCharacterInfo();
    setBossInfo(boss);
    dealLeftCard();
    dealMiddleCard();
    dealRightCard();
};
init();
