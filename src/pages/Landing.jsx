import React from 'react'
import Button from '../base/Button'
import Card from '../base/Card'
import Logo from '../base/Logo'
import Textbox from '../base/Textbox'

const Landing = () => {
    return(
        <div>
            <Logo/>
            <Button value="Iniciar Sesión"/>
            <Button value="Iniciar Sesión" isPrincipal={true}/>
            <Card>
                <h2>Prueba</h2>
                <p>prueba</p>
            </Card>
            <Textbox title="hola" placeholder="xd"/>
        </div>
    )
}

export default Landing