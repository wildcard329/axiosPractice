import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {
    const [data, setData] =useState([])

    useEffect(() => {
        axios.get('https://api.magicthegathering.io/v1/cards')
            .then(res => {
                console.log(res)
                setData(res.data.cards)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])
    return (
        <div>
            {data.map((name, index) => (
                <div> key={index} name={name} </div>
            ))}
        </div>
    )
}