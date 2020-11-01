import React from 'react'

/**
 * Button UI Component 
 * @param {string} value "valor"
 * @param {function} handleClick function
 * @param {boolean} isPrincipal bool
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