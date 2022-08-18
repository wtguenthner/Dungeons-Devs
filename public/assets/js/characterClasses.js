import { default as probabilityCheck, getCardAction, getCardValue } from '../../utils/helpers.js';
import Card from './card.js';

class Fighter {
    constructor(name) {
        this.name = name;
        this.hasProp = false;
    }

    attack(opponent) {
        const attackProb = probabilityCheck(50, 47);

        switch (attackProb) {
            case 1:
                // console.log(opponent.actions.defense);
                opponent.takeDamage(this.actions.attack - opponent.actions.defense)
                break;
            case 10:
                opponent.takeDamage((this.actions.attack * 1.8) - opponent.actions.defense)
                attackProb.message === 'Critical Hit!'
                break;
        }
        return attackProb
    }

    takeDamage(input) {
        this.hp = parseInt(this.hp) - parseInt(input);
    }

    updateAction(action, value) {
        this.actions[action] = parseInt(this.actions[action]) + parseInt(value);
    }

    resetAction(action, value) {
        this.actions[action] = parseInt(this.actions[action]) - parseInt(value);
    }

    // updateHealth(healthbar, value) {
    //     healthbar.querySelector('playerHealthCurrent').style.width = `(${this.health} - ${value})%`
    // }

    defend() {
        const defendProb = probabilityCheck(50, 35, 47);

        switch (defendProb) {
            case defendProb === 1:
                this.actions.defense += (this.actions.defense * .5)
                break;
            case defendProb === 2:
                this.actions.defense += (this.actions.defense * .75)
                break;
            case defendProb === 10:
                this.actions.defense += this.actions.defense
                break;
        }
    }
    
    evade() {
        return probabilityCheck(40, this.evasion);
    }

    bossTurn(boss, player) {
        if (boss.hp <= (boss.hp * .75)) {
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
            boss.attack(player);
        }
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

    // bossTurn(player) {
    //     if (this.hp <= (this.hp * .75)) {
    //         let probOfAttack = probabilityCheck(50, 38);
    //         if (probOfAttack === 1) {
    //             this.attack(player);

    //         } else if (probOfAttack === 10) {
    //             this.defend();
    //         }
    //     } else if (this.hp <= (this.hp * .5)) {
    //         let probOfAttack = probabilityCheck(50, 20);
    //         if (probOfAttack === 1) {
    //             this.attack(player);

    //         } else if (probOfAttack === 10) {
    //             this.defend();
    //         }
    //     } else {
    //         this.attack(player);
    //     }
    // }
}

class Easy extends Boss {
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
}

class Archer extends Range {
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
}

class Gunslinger extends Range {
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
}

class Mage extends Magic {
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
}
class Reaper extends Magic {
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
}

class Rogue extends Might {
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
}

export { Mage, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy };