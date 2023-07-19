import React from 'react'

const plantList = [
    'Monstera',
    'Ficus Lyrata',
    'Silver Pothos',
    'Yucca',
    'Palm'
]


const ShoppingList = () => {
    return (
        <ul>
            {
                plantList.map((plant, i) => {
                    return <li key={i}>{plant}</li>
                })
            }
        </ul>
    )
}

export default ShoppingList
