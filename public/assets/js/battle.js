// import probabilityCheck from '../../../utils/helpers.js';
import Card from "./card.js";
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
const defense = document.querySelector("#playerDefenseVal");;
const evasion = document.querySelector("#playerEvasionVal");;
const portrait = document.querySelector('#playerPortrait-container')
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

let player1;
const boss = {
    character_name: 'Stanley',
    attack: 10,
    defense: 10,
    evasion: 10,
    health: 100,
};

card1.addEventListener('click', (e) => selectCard(e));
card2.addEventListener('click', (e) => selectCard(e));
card3.addEventListener('click', (e) => selectCard(e));

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

    //Use this variable for attack/defense/evasion
    const currentCharacter = await getCharacterData(currentUserData.user_id);
    console.log(currentCharacter)
    playerName.innerText = currentCharacter.character_name;
    attack.innerText = currentCharacter.attack;
    defense.innerText = currentCharacter.defense;
    evasion.innerText = currentCharacter.evasion;
    portrait.innerHTML = `<img id="playerPortrait" class="cardPortrait" src="${currentCharacter.class_avatar}" alt="player's character portrait">`

    return player1 = {
        character_name: currentCharacter.character_name,
        attack: currentCharacter.attack,
        defense: currentCharacter.defense,
        evasion: currentCharacter.evasion,
        health: currentCharacter.health
    }
};

const setBossInfo = async (boss) => {
    bossAttack.innerText = boss.attack;
    bossDefense.innerText = boss.defense;
    bossEvasion.innerText = boss.evasion;
    bossName.innerText = boss.character_name;
}

const probabilityCheck = (max, ratio1, ratio2, ratio3, ratio4, ratio5, ratio6, ratio7, ratio8, ratio9) => {
    let digit = Math.floor(Math.random() * max + 1);
  
  function check(randomNum) {
    if (randomNum <= ratio1) {
        return 1;
    } else if (randomNum <= ratio2) {
        return 2;
    } else if (randomNum <= ratio3) {
        return 3;
    } else if (randomNum <= ratio4) {
        return 4;
    } else if (randomNum <= ratio5) {
        return 5;
    } else if (randomNum <= ratio6) {
        return 6
    } else if (randomNum <= ratio7) {
        return 7
    } else if (randomNum <= ratio8) {
        return 8
    } else if (randomNum <= ratio9) {
        return 9
    } else if (randomNum <= max) {
        return 10
    }
  }
  return check(digit);
}

//get action of card
function getCardAction() {
    const actionNumber = probabilityCheck(3, 1, 2);

    if (actionNumber === 1) {
        return "attack";
    } else if (actionNumber === 2) {
        return "defense";
    } else if (actionNumber === 10) {
        return "evasion";
    }
};

//get value of card
function getCardValue() {
    return probabilityCheck(100, 20, 38, 54, 68, 80, 90, 94, 97, 99);
        // 20% of 1 
        // 18% of 2
        // 16% of 3
        // 14% of 4
        // 12% of 5
        // 10% of 6
        // 4% of 7
        // 3% of 8
        // 2% of 9
        // 1% of 10
    // return helper.probabilityCheck(10, 1, 2, 3, 4, 5, 6, 7, 8, 9);
};

const dealCards = async () => {
        //draw 3 cards
    //card.printCard() returns [action, value] that needs to be printed on card 1
    const cardONE = new Card(getCardAction(), getCardValue());
    card1Title.innerText = cardONE.action;
    card1Val.innerText = `+${cardONE.value}`;
    
    //print card1.action and card1.value to DOM

    //card.printCard() returns [action, value] that needs to be printed on card 2
    const cardTWO = new Card(getCardAction(), getCardValue());
    card2Title.innerText = cardTWO.action;
    card2Val.innerText = `+${cardTWO.value}`;
    //print card2.action and card2.value to DOM

    //card.printCard() returns [action, value] that needs to be printed on card 3
    const cardTHREE = new Card(getCardAction(), getCardValue());
    console.log(cardTHREE);
    card3Title.innerText = cardTHREE.action;
    card3Val.innerText = `+${cardTHREE.value}`;
    //print card3.action and card3.value to DOM

}

const findParentByClass = (elem, className) => {
    while (elem && !hasClass(elem, className)) {
        elem = node.parentNode;
    }
    return elem;
}

const selectCard = async (e) => {
    switch (e) {
        case e === card1Title || e === card1Val || e === card1:
            card1.style.scale = 1.3;
            break;
        case e === card2Title || e === card2Val || e === card2:
            card2.style.scale = 1.3;
            break;
        case e === card3Title || e === card3Val || e === card3:
            card3.style.scale = 1.3;
            break;
    }
}

// setCharacterName();
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
    dealCards();
    battle(player1, boss);
};
init();

// let Kevin = new Paladin("Kevin", 8, 7, 5, 100);
// let boss = new Easy("Mob Assassin", 7, 6, 7, 100);
// battle(Kevin, boss)
