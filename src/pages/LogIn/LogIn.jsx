import React from "react";
import Button from "../../base/Button";
import Textbox from "../../base/Textbox";
import Navbar from "../../components/Navbar";
/*
 TODO: darle estilo a todo 
 */

const LogIn= () => {

    return(
        <div className="login">
            <Navbar isSignUp={true}/>
            <div className="container__titles">
            <h3 className="text__h3">Ya estas registrado? Genial!</h3>
            <h1 className="text__h1">Inicia Sesión con tu datos</h1>
            <h2 className="text__h2">Recuerda nunca revelar tu contraseña!</h2>
            </div>
            <div className="container__inputs">
                <Textbox title="Correo Electrónico" placeholder="ej: usuario@ejemplo.com"></Textbox>
                <Textbox title="contraseña" isPassword={true} placeholder="********"></Textbox>
                <Button value="Iniciar Sesión" isPrincipal={true}></Button>
                <span>Olvidaste la contraseña? Click aquí</span>
                <span>No tienes cuenta? Crear Cuenta</span>
                <span>Necesitas ayuda?</span>
            </div>
        </div>

    )

}

export default LogIn;
