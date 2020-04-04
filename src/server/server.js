/* eslint-disable global-require */
import express from 'express';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import passport from 'passport';
import session from 'express-session';
import boom from '@hapi/boom';
import axios from 'axios';
import helmet from 'helmet';
import main from './main';
import { config } from './config';
import getManifest from './getManifest';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

if (config.dev) {
  //true = development
  console.log(`Using apiURL > ${config.apiUrl}`);
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: config.port, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Using apiURL > ${config.apiUrl}`);
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet(helmet.permittedCrossDomainPolicies()));
  app.disable('x-powered-by');
}
// Basic strategy
require('./utils/auth/strategies/basic');
// OAuth strategy
require('./utils/auth/strategies/oauth');
// Socials strategy
require('./utils/auth/strategies/twitter');
require('./utils/auth/strategies/google');
require('./utils/auth/strategies/facebook');

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized(error));
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token } = data;

        res.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
        });

        res.status(200).json(data);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });

    res.status(201).json({ message: 'user created' });
  } catch (error) {
    next(error);
  }
});

app.get('/movies', async (req, res, next) => {
  // const { authorization } = req.headers;
  // const token = authorization;
  const { token } = req.cookies;

  if (!token) {
    return next(boom.unauthorized('token is needed'));
  }

  try {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/movies/:movieId', async (req, res, next) => {
  // const { authorization } = req.headers;
  // const token = authorization;
  const { token } = req.cookies;
  const { movieId } = req.params;

  if (!token) {
    return next(boom.unauthorized('token is needed'));
  }

  try {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/movies/${movieId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/user-movies', async (req, res, next) => {
  const { token } = req.cookies;
  // const { authorization } = req.headers;
  // const token = authorization;

  if (!token) {
    return next(boom.unauthorized('token is needed'));
  }

  try {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.post('/user-movies', async (req, res, next) => {
  try {
    const { body: userMovie } = req;
    const { token } = req.cookies;

    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: userMovie,
    });

    if (status !== 201) {
      return next(boom.badImplementation(''));
    }

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

app.delete('/user-movies/:userMovieId', async (req, res, next) => {
  try {
    const { userMovieId } = req.params;
    const { token } = req.cookies;

    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies/${userMovieId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'delete',
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get(
  '/auth/google-oauth',
  passport.authenticate('google-oauth', {
    scope: ['email', 'profile', 'openid'],
  }),
);

app.get(
  '/auth/google-oauth/callback',
  passport.authenticate('google-oauth', { session: false }),
  (req, res, next) => {
    console.log('google-oauth callback url called');

    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });

    res.status(200).json(user);
  },
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile', 'openid'],
  }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });

    res.status(200).json(user);
  },
);

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });

    res.status(200).json(user);
  },
);

app.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }),
);

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });

    res.status(200).json(user);
  },
);

app.get('*', main);

app.listen(config.port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port: http://localhost:${config.port}`);
});
