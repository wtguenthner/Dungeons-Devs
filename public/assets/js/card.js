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
}

export default Card;





