/* eslint-disable arrow-parens */
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

const serverRoutes = isLogged => {
  [
    {
      path: '/',
      component: isLogged ? Home : Login,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      path: '/player/:id',
      component: isLogged ? Home : Player,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
