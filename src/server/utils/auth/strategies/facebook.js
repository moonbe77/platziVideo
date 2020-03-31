const passport = require("passport");
const { Strategy: FacebookStrategy } = require("passport-facebook");
const debug = require("debug")("app:facebookStrategy");
const { config } = require("../../../config/index");
const axios = require("axios");
const boom = require("@hapi/boom");

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookClientSecret,
      callbackURL: "http://localhost:8000/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    async function(accessToken, refreshToken, profile, done) {
      debug(`before axios`);

      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: "post",
        data: {
          name: profile.displayName,
          email: profile.emails[0].value,
          password: profile.id,
          apiKeyToken: config.apiKeyToken
        }
      }).catch(error => boom.notFound());

      if (!data || status !== 200) {
        return done(boom.unauthorized(), false);
      }

      return done(null, data);
    }
  )
);
