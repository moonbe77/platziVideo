import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import serverRoutes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';
import { config } from '../config';
import getUserMovies from '../utils/getUserMovies';

require('dotenv').config();

const main = async (req, res, next) => {
  // eslint-disable-next-line prefer-const
  let initialState = {
    user: false,
    playing: {},
    myList: [],
    userMovies: [],
    trends: [],
    originals: [],
  };
  ///verify user is logged in and didn't expired
  try {
    const { name, id, email, token } = req.cookies;

    // verify a token symmetric
    jwt.verify(token, config.authSecret, (err, decoded) => {
      if (err) {
        console.log(err);
        initialState.user = {};
      } else {
        if (name || email || id) {
          const user = {
            id,
            name,
            email,
          };
          initialState.user = user;
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
  //get list of movies
  try {
    const { token } = req.cookies;
    const listMovies = await axios({
      url: `${config.apiUrl}/api/movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    initialState.trends = listMovies.data.data;
    initialState.originals = listMovies.data.data;
  } catch (error) {
    console.log(error);
  }

  //get list of movies of the user
  try {
    if (initialState.user.id) {
      const { token } = req.cookies;
      const userMoviesList = await axios({
        url: `${config.apiUrl}/api/user-movies`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET',
      });

      initialState.myList = userMoviesList.data.data;
    }
  } catch (error) {
    console.log(error);
  }

  // try {
  //   if (initialState.myList.length >= 1) {
  //     const { token } = req.cookies;
  //     let moviesList = [];

  //     getUserMovies(token, initialState.myList)
  //       .then(data => data.map(movie => movie.data))
  //       .then(list => {
  //         moviesList = list;
  //         return moviesList;
  //       })
  //       .catch(error => console.log(error));
  //     initialState.userMovies = moviesList;
  //     console.log(moviesList);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

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
