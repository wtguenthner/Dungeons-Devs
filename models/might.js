import Character from './characters.js';

class Might extends Character {
    constructor(name) {
        super(name);
        hasProp = "Might";
    }
}

class Rogue extends Might {
    constructor(name, attack, defense, evasion, health, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.health = health
        this.id = id
    }
}

class Paladin extends Might {
    constructor(name, attack, defense, evasion, health, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.health = health
        this.id = id
    }
}

export { Might as default, Rogue, Paladin };