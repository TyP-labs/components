import React, { useState } from 'react'
import Button from '../base/Button'
import Card from '../base/Card'
import FloatButton from '../base/FloatButton'
import Logo from '../base/Logo'
import Textbox from '../base/Textbox'
import Secure from '../assets/icons8-security-lock-96.png'
import User from '../assets/icons8-user-96.png'

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
            <Textbox title="Correo Electrónico *" placeholder="ej: usuario@ejemplo.com" handleChange={setText.bind(this)} alt="xd" img={User}/>
            <Textbox title="Contraseña *" placeholder="*********" handleChange={setText.bind(this)} alt="xd" img={Secure} isPassword={true}/>
            <Textbox title="Contraseña *" placeholder="*********" handleChange={setText.bind(this)} />
            <Textbox title="" placeholder="*********" handleChange={setText.bind(this)} />
            <FloatButton value="Esto es una prueba"/>
        </div>
    )
}

export default Landing