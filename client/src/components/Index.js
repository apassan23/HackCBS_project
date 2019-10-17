import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Error404 from './Error404';
import ForgotPassword from './ForgotPassword';

const Index = () => (
  <React.Fragment>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/login/forgot_pwd' exact component={ForgotPassword} />
      <Route path='*' component={Error404} />
    </Switch>
  </React.Fragment>
);

export default Index;
