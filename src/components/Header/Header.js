import React from 'react'
import {connect} from "react-redux"
import "./Header.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/imgs/crown.svg"
import {auth} from "../../firebase/firebaseUtils"
import CartIcon from "../CartIcon/CartIcon"
import CartDropdown from "../CartDropdown/CartDropdown"

function Header({currentUser, hidden}) {
    return (
        <div className="header">
            <Link to="/" className="logo-container"><Logo className="logo"/></Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
            hidden ? null : <CartDropdown/>
            }
            
        </div>
    )
}

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
     currentUser,
     hidden
})

export default connect(mapStateToProps)(Header)
