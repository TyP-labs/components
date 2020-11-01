import React from 'react'

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