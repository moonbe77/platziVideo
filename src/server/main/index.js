import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import serverRoutes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';
import { config } from '../config';

require('dotenv').config();

const main = async (req, res, next) => {
  let initialState;
  let listMovies;

  try {
    const { token } = req.cookies;
    listMovies = await axios({
      url: `${config.apiUrl}/api/movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    listMovies = listMovies.data.data;
  } catch (error) {
    listMovies = [];
  }

  try {
    const { name, id, email } = req.cookies;

    let user = {};

    if (name || email || id) {
      user = {
        id,
        name,
        email,
      };
    }
    console.log('User>>', user);

    initialState = {
      user,
      playing: {},
      myList: [],
      trends: listMovies,
      originals: listMovies,
    };
  } catch (error) {
    console.log(error);

    initialState = {
      user: {},
      playing: {},
      myList: [],
      trends: [],
      originals: [],
    };
  }

  const isLogged = initialState.user.id;
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes(isLogged))}</Layout>
      </StaticRouter>
    </Provider>,
  );
  res.send(render(html, preloadedState));
};

export default main;
