import React from 'react'


/**
 * Float Button
 * @param {*} handleClick function to handle click event
 * @param {*} value value to show on hover event
 * @return Float Button
 */
const FloatButton = props =>{
    const {handleClick, value} = props

    return(
        <div className="float-button" onClick={handleClick}>
            <span className="float-button__plus">+</span>
            <span className="float-button__value">{value}</span>
        </div>
    )
}

export default FloatButton