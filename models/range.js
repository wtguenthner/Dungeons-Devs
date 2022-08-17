import Character from "./characters.js";

class Range extends Character {
    constructor(name) {
        super(name);
        hasProp = "Range";
    }
}

class Archer extends Range {
    constructor(name, attack, defense, evasion, health, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.health = health
        this.id = id
    }
}

class Gunslinger extends Range {
    constructor(name, attack, defense, evasion, health, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.health = health
        this.id = id
    }
}

export { Range as default, Archer, Gunslinger };