import React from 'react'
import "./CustomBtn.scss"

function CustomBtn({children, ...otherProps}) {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default CustomBtn
