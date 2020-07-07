import React from 'react'
import "./CartDropdown.scss"
import CustomBtn from "../CustomBtn/CustomBtn"

function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    )
}

export default CartDropdown
