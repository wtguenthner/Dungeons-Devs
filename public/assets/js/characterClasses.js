import { probCheck, getCardAction, getCardValue } from ('../../../utils/helpers.js');

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

export { Mage as default, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy };