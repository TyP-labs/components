import React from 'react'

/**
 * Card base UI 
 * @param {html} children add jsx to custom this component
 * @return Card structure
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