import React from 'react'
import "./CartDropdown.scss"
import CustomBtn from "../CustomBtn/CustomBtn"
import CartItem from "../../components/CartItem/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/Cart/CartSelectors"

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item = {cartItem}/>)
                }
            </div>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
