import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Painel from './pages/Painel';
import { autenticado } from './auth'

// import { Container } from './styles';

const PrivateRoute = ({component: Component, ...rest }) => (
  <Route { ...rest } render={ props => (
    autenticado() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location}}} />
    )
  )}/>
)

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/painel" component={Painel} />
      </Switch>       
    </BrowserRouter>
  )
}

export default Routes;