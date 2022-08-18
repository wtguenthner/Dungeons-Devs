    //class card = action, value
class Card {
    constructor(action, value) {
        this.action = action,
            this.value = value
    }

    printCard() {
        let action = this.getAction()
        let value = this.getValue()
        return [action, value]
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
    };

    //get value of card
    getCardValue() {
        return helper.probabilityCheck(100, 20, 38, 54, 68, 80, 90, 94, 97, 99);
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
}

export default Card;





