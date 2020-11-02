import React from 'react'
import Button from '../base/Button'
import Card from '../base/Card'
import Logo from '../base/Logo'

const Landing = () => {
    return(
        <div>
            <Logo />
            <Button value="Iniciar Sesión"/>
            <Button value="Iniciar Sesión" isPrincipal={true}/>
            <Card>
                <p>dsadsd</p>
            </Card>
        </div>
    )
}

export default Landing