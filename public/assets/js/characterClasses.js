

import probCheck from '../../../utils/helpers.js'
class Fighter {
    constructor(name) {
        this.name = name;
        hasProp = false;
    }

    takeDamage(input) {
        this.hp -= input;
    }

    attack() {
        const attackProb = probCheck(50, 47);

        switch (attackProb) {
            case attackProb === 1:
                opponentHash[this.name].takeDamage(this.attack)
                break;
            case attackProb === 10:
                opponentHash[this.name].takeDamage(this.attack * 1.8)
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

}

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