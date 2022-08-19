
    //probability function
const probabilityCheck = (max, ratio1, ratio2, ratio3, ratio4, ratio5, ratio6, ratio7, ratio8, ratio9) => {
    let digit = Math.floor(Math.random() * max + 1);
  let indicator = "";
  
  function check(randomNum) {
    if (randomNum <= ratio1) {
        return indicator = 1;
    } else if (randomNum <= ratio2) {
        return indicator = 2;
    } else if (randomNum <= ratio3) {
        return indicator = 3;
    } else if (randomNum <= ratio4) {
        return indicator = 4;
    } else if (randomNum <= ratio5) {
        return indicator = 5;
    } else if (randomNum <= ratio6) {
        return indicator = 6
    } else if (randomNum <= ratio7) {
        return indicator = 7
    } else if (randomNum <= ratio8) {
        return indicator = 8
    } else if (randomNum <= ratio9) {
        return indicator = 9
    } else if (randomNum <= max) {
        return indicator = 10
    }
  }
  return check(digit);
}

const characterCreate = (charName, fighterChoice) => {
    switch (fighterChoice) {
        case "Mage":
            charName = new Mage(fighterChoice, 7, 6, 7, 100);
            break;
        case "Archer":
            charName = new Archer(fighterChoice, 6, 6, 8, 100);
            break;
        case "Gunslinger":
            charName = new Gunslinger(fighterChoice, 8, 6, 6, 100);
            break;
        case "Reaper":
            charName = new Reaper(fighterChoice, 7, 7, 6, 100);
            break;
        case "Rogue":
            charName = new Rogue(fighterChoice, 7, 6, 7, 100);
            break;
        case "Paladin":
            charName = new Paladin(fighterChoice, 8, 7, 5, 100);
            break;
    }
  }

  //get action of card
const getCardAction = () => {
    const actionNumber = probabilityCheck(3, 1, 2);

    if (actionNumber === 1) {
        return "attack";
    } else if (actionNumber === 2) {
        return "defense";
    } else if (actionNumber === 10) {
        return "evasion";
    }
};

//get value of card
const getCardValue = () => {
    return probabilityCheck(100, 20, 38, 54, 68, 80, 90, 95, 98);
        // 20% of 1 
        // 18% of 2
        // 16% of 3
        // 14% of 4
        // 12% of 5
        // 10% of 6
        // 4% of 7
        // 3% of 8
        // 2% of 9
        // 1% of 10
    // return helper.probabilityCheck(10, 1, 2, 3, 4, 5, 6, 7, 8, 9);
};

// function characterCreate(charName, fighterChoice) {
//     switch (fighterChoice) {
//         case "Mage":
//             charName = new Mage(fighterChoice, 7, 6, 7, 100);
//             break;
//         case "Archer":
//             charName = new Archer(fighterChoice, 6, 6, 8, 100);
//             break;
//         case "Gunslinger":
//             charName = new Gunslinger(fighterChoice, 8, 6, 6, 100);
//             break;
//         case "Reaper":
//             charName = new Reaper(fighterChoice, 7, 7, 6, 100);
//             break;
//         case "Rogue":
//             charName = new Rogue(fighterChoice, 7, 6, 7, 100);
//             break;
//         case "Paladin":
//             charName = new Paladin(fighterChoice, 8, 7, 5, 100);
//             break;
//     }
//   }

export { probabilityCheck as default, getCardAction, getCardValue };
