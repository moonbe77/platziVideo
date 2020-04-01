const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const axios = require('axios');
const debug = require('debug')('app:strategies');
const { config } = require('../../../config/index');

passport.use(
  new BasicStrategy(async (email, password, cb) => {
    debug('Basic strategy called');
    try {
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-in`,
        method: 'post',
        auth: {
          password,
          username: email,
        },
        data: {
          apiKeyToken: config.apiKeyToken,
        },
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized('Data not retrieved from the server'), false);
      }

      return cb(null, data);
    } catch (error) {
      cb(error);
    }
  }),
);
