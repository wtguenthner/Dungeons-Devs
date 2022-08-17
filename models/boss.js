import Character from "./characters.js";

class Boss extends Character {
    constructor(name) {
        super(name);
        hasProp = "BOSS"
    }

    bossTurn(boss, player) {
        if (boss.health <= (boss.health * .25)) {
            let probOfAttack = probCheck(50, 38);
            if (probOfAttack === 1) {
                boss.attack(player);

            } else if (probOfAttack === 10) {
                boss.defend();
            }
        } else if (boss.health <= (boss.health * .5)) {
            let probOfAttack = probCheck(50, 20);
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
    constructor(name, attack, defense, evasion, health, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.health = health
        this.id = id
    }
}

export { Boss as default, Easy };