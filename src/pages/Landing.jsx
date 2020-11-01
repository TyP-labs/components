import React from 'react'
import Button from '../base/Button'

const Landing = () => {
    return(
        <div>
            <Button value="Iniciar Sesión"/>
            <Button value="Iniciar Sesión" isPrincipal={true}/>
        </div>
    )
}

export default Landing