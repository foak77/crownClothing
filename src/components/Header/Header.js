import React from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/imgs/crown.svg"

function Header() {
    return (
        <div className="header">
            <Link to="/" className="logo-container"><Logo className="logo"/></Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>

            </div>
        </div>
    )
}

export default Header
