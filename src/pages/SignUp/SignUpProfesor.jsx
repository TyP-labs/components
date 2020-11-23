import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../base/Card';
import Navbar from '../../components/Navbar';

const SelectorCard = props => {

  const {img, title} = props

  return(
    <Card>
      <div>
        <img src={img} className=""/>
        <h3>{title}</h3>
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

      <div className="container-selector__card">
        <Link to="" style={{textDecoration: 'none', margin: '0 25px 0 0'}}>

        </Link>
        <Link to="" style={{textDecoration: 'none', margin: '0 25px 0 0'}}>
        </Link>
      </div>

    </div>
  );
};

export default SignUp__Profesor;
