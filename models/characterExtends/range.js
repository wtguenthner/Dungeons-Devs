import Character from "../characters";

class Range extends Character {
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

export { Range as default, Archer, Gunslinger };