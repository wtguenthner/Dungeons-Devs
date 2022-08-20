import {
  default as probabilityCheck,
  getCardAction,
  getCardValue,
} from "../../utils/helpers.js";
import Card from "./card.js";
const playerHealthbar = document.getElementById("playerHealthCurrent");
const bossHealthbar = document.getElementById("bossHealthCurrent");
const gameLog = document.getElementById("gameLog");
let turn = 1;
class Fighter {
  constructor(name) {
    this.name = name;
    this.hasProp = false;
  }

  attack(opponent, healthbar, attacker) {
    const attackProb = probabilityCheck(50, 47);

    switch (attackProb) {
      case 1:
        let damage = this.actions.attack - opponent.actions.defense;
        opponent.takeDamage(opponent.name, damage, attacker.name);
        this.updateHealth(healthbar, damage, opponent);
        if (damage > 0) {
          gameLog.innerHTML += `<p>Turn: ${turn} - ${attacker.name} hit ${opponent.name} for ${damage} damage</p>`;
          gameLog.scrollTop = gameLog.scrollHeight;
        } else {
          gameLog.innerHTML += `<p>Turn: ${turn} - ${attacker.name} hit ${opponent.name} for 0 damage</p>`;
        }
        gameLog.scrollTop = gameLog.scrollHeight;
        break;
      case 10:
        let critDamage = this.actions.attack * 1.8 - opponent.actions.defense;
        opponent.takeDamage(opponent.name, critDamage, attacker.name);
        this.updateHealth(healthbar, critDamage, opponent);
        if (critDamage > 0) {
          gameLog.innerHTML += `<p>Turn: ${turn} - ${attacker.name} hit ${opponent.name} for ${critDamage} damage *CRIT*</p>`;
          gameLog.scrollTop = gameLog.scrollHeight;
        } else {
          gameLog.innerHTML += `<p>Turn: ${turn} - ${attacker.name} hit ${opponent.name} for 0 damage</p>`;
        }
        gameLog.scrollTop = gameLog.scrollHeight;
        break;
    }

    return attackProb;
  }

  resetStats() {
    this.actions = { ...this.baseStats };
  }

  takeDamage(opponentName, input, attackerName) {
    if (parseInt(input) <= 0) {
      return;
    } else {
      let newHealth = parseInt(this.hp) - parseInt(input);

      console.log(newHealth);
      this.hp = newHealth;
    }
  }

  updateAction(action, value) {
    this.actions[action] = parseInt(this.actions[action]) + parseInt(value);
  }

  resetAction(action, value) {
    this.actions[action] = parseInt(this.actions[action]) - parseInt(value);
  }

  updateHealth(healthbar, value, opponent) {
    if (value <= 0) {
      return;
    } else {
      let healthbarPercent = `${parseInt(opponent.hp)}%`;
      console.log(healthbarPercent);
      if (healthbar.id === "playerHealthCurrent") {
        playerHealthbar.style.width = healthbarPercent;
      } else if (healthbar.id === "bossHealthCurrent") {
        bossHealthbar.style.width = healthbarPercent;
      }
    }
  }

  defend() {
    const defendProb = probabilityCheck(50, 35, 47);

    switch (defendProb) {
      case 1:
        return;
      case 2:
        let boostedDefense = this.actions.defense + 2;
        gameLog.innerHTML += `<p id="boostedDefense">Defending boosted your defense +2</p>`;
        this.actions.defense = this.actions.defense + boostedDefense;
        break;
      case 10:
        let boostederDefense = this.actions.defense + 5;
        gameLog.innerHTML += `<p id="boostederDefense">Defending boosted your defense +5</p>`;
        this.actions.defense = this.actions.defense + boostederDefense;
        break;
    }
  }

  evade() {
    const evadeProb = probabilityCheck(40, this.actions.evasion);

    switch (evadeProb) {
      case 1:
        this.actions.defense = this.actions.defense + 100;
        gameLog.innerHTML += `<p>Turn: ${turn} - Evade! </p>`;
        break;
      case 10:
        return;
    }
  }

  bossTurn(boss, player, healthbar) {
    if (boss.hp <= boss.hp * 0.75) {
      let probOfAttack = probabilityCheck(50, 38);
      if (probOfAttack === 1) {
        boss.attack(player, healthbar, boss);
      } else if (probOfAttack === 10) {
        boss.defend();
      }
    } else if (boss.hp <= boss.hp * 0.5) {
      let probOfAttack = probabilityCheck(50, 20);
      if (probOfAttack === 1) {
        boss.attack(player, healthbar, boss);
      } else if (probOfAttack === 10) {
        boss.defend();
      }
    } else {
      boss.attack(player, healthbar, boss);
    }
    turn++;
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
    this.hasProp = "BOSS";
  }
}

class Easy extends Boss {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}

class Archer extends Range {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}

class Gunslinger extends Range {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}

class Mage extends Magic {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}
class Reaper extends Magic {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}

class Rogue extends Might {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}

class Paladin extends Might {
  constructor(name, attack, defense, evasion, hp, id) {
    super(name);
    this.hp = hp;
    this.id = id;
    this.actions = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
    this.baseStats = {
      attack: attack,
      defense: defense,
      evasion: evasion,
    };
  }
}

export { Mage, Archer, Gunslinger, Reaper, Rogue, Paladin, Easy };
