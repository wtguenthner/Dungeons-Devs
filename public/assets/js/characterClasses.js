import { probCheck, getCardAction, getCardValue } from ('../../../utils/helpers.js');
import Card from ('./card.js');

class Fighter {
    constructor(name) {
        this.name = name;
        hasProp = false;
    }

    takeDamage(input) {
        this.hp -= input;
    }

    attack(opponent) {
        const attackProb = probCheck(50, 47);

        switch (attackProb) {
            case attackProb === 1:
                opponent[this.name].takeDamage(this.attack - opponent[this.defense])
                break;
            case attackProb === 10:
                opponent[this.name].takeDamage((this.attack * 1.8) - opponent[this.defense])
                attackProb.message === 'Critical Hit!'
                break;
        }
        return attackProb
    }

    defend() {
        const defendProb = probCheck(50, 35, 47);

        switch (defendProb) {
            case defendProb === 1:
                this.defense += (this.defense * .5)
                break;
            case defendProb === 2:
                this.defense += (this.defense * .75)
                break;
            case defendProb === 10:
                this.defense += this.defense
                break;
        }
    }
    
    evade() {
        return probCheck(40, this.evasion);
    }

}

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
            bossTurn(player);
        } else if (e.cardAction === 'defend') {
            player.defend();
            bossTurn(player);
        } else if (e.cardAction === 'evade') {
            player.evade();
            bossTurn(player);
        }
        
        
}
function bossTurn(player) {

}
let Kevin = new Paladin("Kevin", 8, 7, 5, 100);
let boss = new Easy("Mob Assassin", 7, 6, 7, 100);
battle(Kevin, boss)

class Might extends Fighter {
    constructor(name) {
        super(name);
        hasProp = "Might";
    }
}

class Magic extends Fighter {
    constructor(name) {
        super(name);
        hasProp = "Magic";
    }
}

class Range extends Fighter {
    constructor(name) {
        super(name);
        hasProp = "Range";
    }
}

class Boss extends Fighter {
    constructor(name) {
        super(name);
        hasProp = "BOSS"
    }
}

class Easy extends Boss {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

class Archer extends Range {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

class Gunslinger extends Range {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

class Mage extends Magic {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}
class Reaper extends Magic {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

class Rogue extends Might {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

class Paladin extends Might {
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

function characterCreate(charName, fighterChoice) {
    switch (fighterChoice) {
        case "Mage":
            charName = new Mage(fighterChoice, 7, 6, 7, 100);
            break;
        case "Archer":
            charName = new Archer(fighterChoice, 6, 6, 8, 100);
            break;
        case "Gunslinger":
            charName = new Gunslinger(fighterChoice, 8, 6, 6, 100);
            break;
        case "Reaper":
            charName = new Reaper(fighterChoice, 7, 7, 6, 100);
            break;
        case "Rogue":
            charName = new Rogue(fighterChoice, 7, 6, 7, 100);
            break;
        case "Paladin":
            charName = new Paladin(fighterChoice, 8, 7, 5, 100);
            break;
    }
}

export { Mage, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy };