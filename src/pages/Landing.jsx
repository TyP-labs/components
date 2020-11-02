import React, { useState } from 'react'
import Button from '../base/Button'
import Card from '../base/Card'
import FloatButton from '../base/FloatButton'
import Logo from '../base/Logo'
import Textbox from '../base/Textbox'

const Landing = () => {

    const [text,setText] = useState('')

    return(
        <div>
            <Logo/>
            <Button value="Iniciar Sesión"/>
            <Button value="Crear Cuenta" isPrincipal={true} handleClick={alert.bind(this, text)}/>
            <Card>
                <h2 className="text__h2">Prueba</h2>
                <p className="text__p">prueba</p>
            </Card>
            <Textbox title="hola" placeholder="xd" handleChange={setText.bind(this)}/>
            <FloatButton value="Esto es una prueba"/>
        </div>
    )
}

export default Landing