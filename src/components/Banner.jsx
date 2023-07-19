import React from 'react'
import Header from './Header'

const Banner = () => {
    const description = 'A one stop shop for you to purchase anytype of plant !!'
    return (
        <div>
            <Header />
            <p>{description}</p>
        </div>
    )
}

export default Banner
