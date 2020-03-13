/* eslint-disable no-restricted-globals */
/* eslint-disable global-require */
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import Axios from 'axios';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
// import initialState from '../frontend/initialState';
import getManifest from './getManifest';

const helmet = require('helmet');

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();
app.use(cookieParser());

if (ENV === 'development') {
  console.log(`Environment set to > ${ENV}`);
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet(helmet.permittedCrossDomainPolicies()));
  app.disable('x-powered-by');
}
const setResponse = (html, preloadedState, manifest) => {
  const mainStyle = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return `
    <html>
      <head>
        <title>Platzi Video</title>
        <link rel="stylesheet" href="${mainStyle}" type="text/css">
      </head>
      <body>
        <div id="app">${html}</div>
          <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c',
          )}
        </script>
        <script src="${vendorBuild}" type="text/javascript"></script>
        <script src="${mainBuild}" type="text/javascript"></script>
      </body>
    </html >
    `;
};

const renderApp = async (req, res) => {
  let initialState;
  let listMovies;

  try {
    const { token } = req.cookies;
    listMovies = await Axios({
      url: 'https://movie-api-moonbe77.now.sh/api/movies',
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
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};
app.get('*', renderApp);

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log(`Server running on port: http://localhost:${PORT}`);
});
