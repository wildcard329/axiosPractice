import React from 'react';

export default function CardMaker ({ card }) {
    return (
        <div>
            <h1>Name: {card.name}</h1>
            <p>Mana Cost: {card.manaCost}</p>
            <p>Rarity: {card.rarity}</p>
            <p>Text: {card.text}</p>
            <img src = {card.imageUrl} />
        </div>
    )
}