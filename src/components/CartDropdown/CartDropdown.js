import React from 'react'
import "./CartDropdown.scss"
import CustomBtn from "../CustomBtn/CustomBtn"
import CartItem from "../../components/CartItem/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/Cart/CartSelectors"
import {createStructuredSelector} from "reselect"
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../redux/Cart/CartAction"

function CartDropdown({cartItems, history, dispatch}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item = {cartItem} />
                    ))
                    :
                    <span className="empty-message">Your Cart Is Empty</span>
                }
            </div>
            <CustomBtn onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden())
            }}
            >GO TO CHECKOUT</CustomBtn>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
