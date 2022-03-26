import Card, {CardSuit} from "./Card"

export default class Deck {
    constructor() {
        this.cards = _get52Cards();
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    splitDeck() {
        return [this.cards.slice(0, 26), this.cards.slice(26)];
    }
}

function _get52Cards() {
    // for (let i = 0; i < CardSuit.allSuits.length; i++) {
    //     const suit = CardSuit.allSuits[i]

    const cards = [];

    for (const suit in CardSuit.allSuits) {
        for (let i = 1; i <= 13; i++) {
            const card = new Card(i, suit);
            cards.push(card);
        }
    }

    return cards;
}
