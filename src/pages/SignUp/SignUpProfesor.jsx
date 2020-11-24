import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../base/Card';
import Navbar from '../../components/Navbar';
import Join from '../../assets/Add User-amico.svg';
import Community from '../../assets/Community-amico.svg';
import StateBar from '../../base/StateBar';

const SelectorCard = props => {

  const {img, title} = props

  return(
    <Card>
      <div className="selector-card__container">
        <img src={img}/>
        <h3 className="text__h3--black" style={{cursor:'pointer'}}>{title}</h3>
      </div>
    </Card>
  )
}

const SignUp__Profesor = () => {
  return (
    <div className="signup__profesor">
      <Navbar isSignUp={true} />

      <div className="signup-type">
        <h3 className="text__h3" style={{color:'#683ce4'}}>Cuenta de profesor</h3>
      </div>

      <div className="holder-selector__card">
        <h2 className="text__h2">Primer paso!</h2>
        <h3 className="text__h3">Selecciona una de las siguientes opciones.</h3>
        
        <div className="container-selector__card">
            <SelectorCard
            title="Crear nueva comunidad"
            img={Community}
            />

            <SelectorCard
            title="Unirse a comunidad existente"
            img={Join}
            />

        </div>
      </div>

      <div className="signup__profesor-state-bar">
        <StateBar length={3} actual={1}/>
      </div>

    </div>
  );
};

export default SignUp__Profesor;
