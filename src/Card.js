export default class Card {
    constructor(number, suit) {
        if (number < 1 || number > 13) throw Error("card can only be between 1-13");

        this.number = number;
        this.suit = suit;
        this.cardName = this._getCardName();
    }

    _getCardName() {
        switch (this.number) {
            case 13:
                return "King";
            case 12:
                return "Queen";
            case 11:
                return "Prince";
            default:
                return this.number.toString();
        }
    }
}

export class CardSuit {
    static Diamonds = new CardSuit(0);
    static clubs = new CardSuit(1);
    static Hearts = new CardSuit(2);
    static Spades = new CardSuit(3);

    static allSuits = [CardSuit.Diamonds, CardSuit.clubs, CardSuit.Hearts, CardSuit.Spades];

    constructor(value) {
        this.value = value;
    }
}
