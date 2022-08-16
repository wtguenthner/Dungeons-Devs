import Character from "../characters";

class Boss extends Character {
    constructor(name) {
        super(name);
        hasProp = "BOSS"
    }

    bossTurn(boss, player) {
        if (boss.hp <= (boss.hp * .25)) {
            let probOfAttack = probCheck(50, 38);
            if (probOfAttack === 1) {
                boss.attack(player);

            } else if (probOfAttack === 10) {
                boss.defend();
            }
        } else if (boss.hp <= (boss.hp * .5)) {
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
    constructor(name, attack, defense, evasion, hp, id) {
        super(name);
        this.attack = attack;
        this.defense = defense;
        this.evasion = evasion;
        this.hp = hp
        this.id = id
    }
}

export { Boss as default, Easy };