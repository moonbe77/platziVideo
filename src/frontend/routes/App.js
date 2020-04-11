import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Layout from '../components/Layout';
import CreateMovie from '../containers/CreateMovie';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={isLogged ? Home : Login} />
        <Route exact path='/auth/google/callback' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/create_movie' component={CreateMovie} />
        <Route exact path='/player/:id' component={isLogged ? Player : Login} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
