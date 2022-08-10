const helper = require("../../../utils/helpers");

//class card = action, value
class Card 
{
    constructor(action, value) 
    {
        this.action = action,
        this.value = value
    }

    //get action of card
    getAction = () => 
        {
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
    getValue = () =>
    {
    return helper.probabilityCheck(10, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    };
}







