import React from 'react'

const Cart = () => {
    const monstera_price = 8;
    const ivy_price = 10;
    const bunch_price = 15;
    return (
        <div>
            <ul>
                <li>Monstera Price {monstera_price}$</li>
                <li>Ivy Price {ivy_price}$</li>
                <li>Bunch Price {bunch_price}$</li>
            </ul>
            Total :  {monstera_price+ivy_price+bunch_price }$
        </div>
    )
}

export default Cart
