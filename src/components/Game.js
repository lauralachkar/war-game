import './Game.css';
import React from "react";
import Deck from "../Deck"

function Game() {

    const deck = new Deck();
    deck.shuffle();

    const deckHalves = deck.splitDeck();
    const userHalf = deckHalves[0];
    const compHalf = deckHalves[1];

    const roundNumber = 1;

    return (
        <div className="Game">
            <table>
                <tr>
                    <td></td>
                    <td>User</td>
                    <td>Comp</td>
                </tr>
                <tr>
                    <td>N.0 {roundNumber}</td>
                    <td className="Card">{userHalf[0].cardName}</td>
                    <td className="Card">{compHalf[0].cardName}</td>
                </tr>
                <td></td>
            </table>
        </div>
    );
}

export default Game;
