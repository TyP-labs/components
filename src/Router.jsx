import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './pages/Landing/Landing';
import SignUp from './pages/SignUp';
import SignUp__Profesor from './pages/SignUp__Profesor';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/crear-cuenta" component={SignUp} />
        <Route exact path="/crear-cuenta/profesor" component={SignUp__Profesor} />
      </Switch>
      <Footer
        list={[
          'Términos y Condiciones',
          'Políticas de Privacidad',
          'Sobre Nosotros',
          'Precios',
          'Servicios',
        ]}
      />
    </BrowserRouter>
  );
};

export default Router;
