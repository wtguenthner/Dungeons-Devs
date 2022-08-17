import { default as probabilityCheck, characterCreate, getCardAction, getCardValue } from '../../utils/helpers.js';
import Card from './card.js';

class Fighter {
    constructor(name) {
        this.name = name;
        this.hasProp = false;
    }

    takeDamage(input) {
        this.hp -= input;
    }

    updateHealth(healthbar, value) {
        healthbar.querySelector('playerHealthCurrent').style.width = `(${this.health} - ${value})%`
    }

    attack(opponent) {
        const attackProb = probabilityCheck(50, 47);

        switch (attackProb) {
            case attackProb === 1:
                opponent.takeDamage(this.attack - opponent.defense)
                break;
            case attackProb === 10:
                opponent.takeDamage((this.attack * 1.8) - opponent.defense)
                attackProb.message === 'Critical Hit!'
                break;
        }
        return attackProb
    }

    defend() {
        const defendProb = probabilityCheck(50, 35, 47);

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
        return probabilityCheck(40, this.evasion);
    }

}

class Might extends Fighter {
    constructor(name) {
        super(name);
        this.hasProp = "Might";
    }
}

class Magic extends Fighter {
    constructor(name) {
        super(name);
        this.hasProp = "Magic";
    }
}

class Range extends Fighter {
    constructor(name) {
        super(name);
        this.hasProp = "Range";
    }
}

class Boss extends Fighter {
    constructor(name) {
        super(name);
        this.hasProp = "BOSS"
    }

    bossTurn(boss, player) {
        if (boss.hp <= (boss.hp * .25)) {
            let probOfAttack = probabilityCheck(50, 38);
            if (probOfAttack === 1) {
                boss.attack(player);

            } else if (probOfAttack === 10) {
                boss.defend();
            }
        } else if (boss.hp <= (boss.hp * .5)) {
            let probOfAttack = probabilityCheck(50, 20);
            if (probOfAttack === 1) {
                boss.attack(player);

            } else if (probOfAttack === 10) {
                boss.defend();
            }
        } else {
            boss.attack();
        }
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
        this.hp = hp
        this.id = id
        this.actions = {
            attack: attack,
            defense: defense,
            evasion: evasion
        }
    }
    updateAction(action, value) {
        this.actions[action] += value;
    }
    resetAction(action, value) {
        this.actions[action] -= value;
    }
}
// onclick e.currentTarget start from console.log

export { Mage, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy };