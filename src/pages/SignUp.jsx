import React, { useEffect } from 'react';
import Selector from '../base/Selector';
import Navbar from '../components/Navbar';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sign-up">
      <Navbar isSignUp={true} />
      <div className="sign-up__container">
        <div className="container__text">
          <h3 className="text__h3">Todavía no tienes Cuenta?</h3>
          <h1 className="text__h1">Crea tu Cuenta ahora mismo!</h1>
          <h2 className="text__h2">
            Elige la categoría que mejor se adapte a ti.
          </h2>
        </div>
        <div className="sign-up__selector">
          <Selector value="Soy Estudiante" />
          <Selector value="Soy Padre" />
          <Selector value="Soy Profesor" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
