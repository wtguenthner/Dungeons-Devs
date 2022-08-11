import { probabilityCheck, getCardAction, getCardValue } from ('../../../utils/helpers.js');
import { Card } from ('./card.js');

const battle = async (player, opponent) => {
    
    //draw 3 cards
        //card.printCard() returns [action, value] that needs to be printed on card 1
        const card1 = new Card(getCardAction(), getCardValue())
            //print card1.action and card1.value to DOM via handlebars
        //card.printCard() returns [action, value] that needs to be printed on card 2
        const card2 = new Card(getCardAction(), getCardValue())
            //print card2.action and card2.value to DOM via handlebars
        //card.printCard() returns [action, value] that needs to be printed on card 3
        const card3 = new Card(getCardAction(), getCardValue())
            //print card3.action and card3.value to DOM via handlebars

    //select card to play
        //on event "click" emphasis goes to selected card (maybe by enlarging it), and play buttons(attack, defend, evade) become visible.
        //on different card "click" emphasis changes to newly selected card
    //click play button
        switch (cardAction) {
            case 'attack':
                player.attack += cardValue;
                //print changed value to player card on DOM
                break;
            case 'defense':
                player.defense += cardValue;
                //print changed value to player card on DOM
                break;
            case 'evation':
                player.evasion += cardValue;
                //print changed value to player card on DOM
                break;
        }
        if (e.cardAction === 'attack') {
            player.attack(opponent);
            opponent.bossTurn(opponent, player);
        } else if (e.cardAction === 'defend') {
            player.defend();
            opponent.bossTurn(opponent, player);
        } else if (e.cardAction === 'evade') {
            player.evade();
            opponent.bossTurn(opponent, player);
        }
        
        
}

let Kevin = new Paladin("Kevin", 8, 7, 5, 100);
let boss = new Easy("Mob Assassin", 7, 6, 7, 100);
battle(Kevin, boss)