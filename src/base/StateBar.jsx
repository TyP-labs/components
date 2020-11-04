import React, {useEffect, useState} from 'react'

const Circle = props => {
    const { isSelected, key } = props

    return <div className={isSelected ? 'statebar__circle--selected' : 'statebar__circle'} key={key}></div>
}

/**
 * Statebar UI Component
 * @param {integer} length circles length
 * @param {integer} actual actual length 
 * @return Statebar
 */
const StateBar = props => {

    const { length, actual } = props
    const items = []

    for(let i=1; i<=props.length; i++){
        let isSelected
        i===actual ? 
        isSelected = true
        :
        isSelected = false
        
        items.push({isSelected})
    }

    return(
        <div className="state-bar">
            {items.map((value, key)=>{
                return <Circle {...value} key={key}/>
            })}
        </div>
    )
}

export default StateBar