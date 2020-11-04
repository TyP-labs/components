import React from 'react'

/**
 * Selector UI Base Component
 * @param {string} value string value
 * @param {*} handleClick function to handle click event
 * @return Selector
 */
const Selector=(props)=>{ 

    const { value, handleClick } = props

    const propieties={
        value:value, 
        type:"button",
        className:"selector",
        onClick: handleClick
    }

    return(
        <input {...propieties}/>
    )
}

export default Selector