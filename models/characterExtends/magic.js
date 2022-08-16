import Character from "../characters";

class Magic extends Character {
    constructor(name) {
        super(name);
        hasProp = "Magic";
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

export { Magic as default, Mage, Reaper };