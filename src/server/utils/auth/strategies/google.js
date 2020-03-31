const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const axios = require('axios');
const boom = require('@hapi/boom');

const { config } = require('../../../config');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: `${config.appUrl}/auth/google/callback`,
    },
    async (accessToken, refreshToken, { _json: profile }, done) => {
      console.log(profile);
      try {
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/auth/sign-provider`,
          method: 'post',
          data: {
            name: profile.name,
            email: profile.email,
            password: profile.sub,
            apiKeyToken: config.apiKeyToken,
          },
        });

        if (!data || status !== 200) {
          done(boom.unauthorized(), false);
        }

        done(null, data);
      } catch (err) {
        done(err);
      }
    },
  ),
);
