//probability function
const probabilityCheck = (
  max,
  ratio1,
  ratio2,
  ratio3,
  ratio4,
  ratio5,
  ratio6,
  ratio7,
  ratio8
) => {
  let digit = Math.floor(Math.random() * max + 1);
  let indicator = "";

  function check(randomNum) {
    if (randomNum <= ratio1) {
      return (indicator = 1);
    } else if (randomNum <= ratio2) {
      return (indicator = 2);
    } else if (randomNum <= ratio3) {
      return (indicator = 3);
    } else if (randomNum <= ratio4) {
      return (indicator = 4);
    } else if (randomNum <= ratio5) {
      return (indicator = 5);
    } else if (randomNum <= ratio6) {
      return (indicator = 6);
    } else if (randomNum <= ratio7) {
      return (indicator = 7);
    } else if (randomNum <= ratio8) {
      return (indicator = 8);
    } else if (randomNum <= max) {
      return (indicator = 10);
    }
  }
  return check(digit);
};

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
  let value = probabilityCheck(100, 20, 38, 54, 68, 80, 90, 95, 98);
  console.log(probabilityCheck(100, 20, 38, 54, 68, 80, 90, 95, 98));

  if (value === 10) {
    return 9;
  } else {
    return value;
  }
};

export { probabilityCheck as default, getCardAction, getCardValue };
