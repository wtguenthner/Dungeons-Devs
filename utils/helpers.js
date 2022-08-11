
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

export default probabilityCheck;
