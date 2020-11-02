import React from 'react'

/**
 * Button UI Component 
 * @param {string} value main button value
 * @param {function} handleClick function to handle click event
 * @param {boolean} isPrincipal select between principal and secondary button style
 * @return Button
 */
const Button = props => {

    const { value, handleClick, isPrincipal } = props

    const properties = {
        value: value,
        onClick: handleClick,
        type: 'button',
        className: isPrincipal ? 'button-principal' : 'button-secondary'
    }

    return(
        <input {...properties}/>
    )
}

export default Button