import React from 'react'

const Selector=(props)=>{ 

    const{value,handleClick}=props
    const propieties={
        value:value, 
        type:"button",
        className:"selector"
    }

    return(
        <input {...propieties}/>
    )
}
 






export default Selector