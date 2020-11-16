import React from "react";
import Navbar from "../components/Navbar";
import InfoCard from "./Landing/InfoCard";

const SignUp__Profesor = () => {

    return (

        <div className="signup__profesor">
            <Navbar isSignUp={true}/>
            <div className="signup-type">Cuenta de profesor</div>
            <div className="container-selector_card">
            <InfoCard className="signup-selector_card" title="Crear nueva comunidad">
            </InfoCard>
            <InfoCard className="signup-selector_card" title="Unirse a comunidad existente">
            </InfoCard>
            </div>
        </div>
    )  


}

export default SignUp__Profesor;