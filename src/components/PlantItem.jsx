import React from 'react'
import CareScale from './CareScale'

const PlantItem = ({name, cover, id, light, water}) => {
    return (
        <ul>
            <li>Plant Name : {name}</li>
            <li>Plant Id : {id}</li>
            <li>
                <CareScale careType={'light'} scaleValue={light} />
            </li>
            <li>
                <CareScale careType={'water'} scaleValue={water} />
            </li>
        </ul>
    )
}

export default PlantItem
