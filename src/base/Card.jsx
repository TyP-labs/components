import React from 'react'

/**
 * Card base UI 
 * @param {html} children
 */
const Card = props => {

    const { children } = props

    return(
        <div className="card">
            {children}
        </div>
    )
}

export default Card