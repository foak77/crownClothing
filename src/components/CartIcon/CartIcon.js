import React from 'react'
import {connect} from "react-redux"
import { toggleCartHidden } from "../../redux/Cart/CartAction"
import "./CartIcon.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/imgs/shopping-bag.svg"
import { selectCartItemsCount, selectCartItems } from "../../redux/Cart/CartSelectors"

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
<span className="item-count">{itemCount}</span>
        </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon)
