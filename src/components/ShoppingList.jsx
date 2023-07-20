import React from 'react'
import { plantList } from '../data/plantList';
import CareScale from './CareScale';
import PlantItem from './PlantItem';

const categoryList = [];

const ShoppingList = () => {
    plantList.forEach((plant) => {
        if (!categoryList.includes(plant.category)) {
            categoryList.push(plant.category)
        }
    })
    return (
        <div>
            <ul>
                {
                    categoryList.map((cat) => {
                        return <li key={cat.id}>{cat}</li>
                    })
                }
            </ul>
            <ul>
                {
                    plantList.map((plant) => {
                        return (<li key={plant.id}>
                            {plant.name.toUpperCase()} : {plant.isBestSale && '🔥'}
                        </li>)
                    })
                }
            </ul>
            <ul>
                {
                    plantList.map((plant) => {
                        return (<li key={plant.id}>
                            <PlantItem name={plant.name} id={plant.id} light={plant.light} water={plant.water} />
                        </li>)
                    })
                }
            </ul>


        </div>
    )
}

export default ShoppingList
