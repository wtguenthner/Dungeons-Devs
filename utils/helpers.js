
const probabilityCheck = (max, ratio1, ratio2, ratio3, ratio4, ratio5) => {
    let digit = Math.floor(Math.random() * (max - 1) + 1);
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
    }
  }
  return check(digit);
}

module.exports = probabilityCheck;