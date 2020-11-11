import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import SignUp from './pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/crear-cuenta" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
