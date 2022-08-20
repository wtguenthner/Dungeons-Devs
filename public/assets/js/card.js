//class card = action, value
class Card {
  constructor(action, value) {
    (this.action = action), (this.value = value);
  }

  printCard() {
    let action = this.getAction();
    let value = this.getValue();
    return [action, value];
  }

  //get action of card
  getCardAction() {
    const actionNumber = helper.probabilityCheck(3, 1, 2);

    if (actionNumber === 1) {
      return "attack";
    } else if (actionNumber === 2) {
      return "defense";
    } else if (actionNumber === 10) {
      return "evasion";
    }
  }

  //get value of card
  getCardValue() {
    let value = probabilityCheck(100, 20, 38, 54, 68, 80, 90, 95, 98);
    console.log(value);
    if (value === 10) {
      return 9;
    } else {
      return value;
    }
  }
}

export default Card;
