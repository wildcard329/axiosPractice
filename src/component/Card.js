import React, { useState, useEffect } from 'react';
import CardMaker from './CardMaker';
import axios from 'axios';

export default function Card() {
    const [data, setData] =useState([])

    useEffect(() => {
        axios.get('https://api.magicthegathering.io/v1/cards')
            .then(res => {
                console.log(res)
                setData(res.data.cards)
                console.log(data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])
    return (
        <div>
            {data.map((card, index) => (
                <CardMaker key={index} card={card} />
            ))}
        </div>
    )
}