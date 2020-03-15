const passport = require("passport");
const axios = require("axios");
const boom = require("@hapi/boom");
const { OAuth2Strategy } = require("passport-oauth");
const debug = require("debug")("app:oauth");
const { config } = require("../../../config/index");

const GOOGLE_AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://www.googleapis.com/oauth2/v4/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo";

const oAuth2Strategy = new OAuth2Strategy(
  {
    authorizationURL: GOOGLE_AUTHORIZATION_URL,
    tokenURL: GOOGLE_TOKEN_URL,
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: "http://localhost:8000/auth/google-oauth/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    debug(`oAuth2Strategy`);
    debug(`env apiURL>> ${config.apiUrl}`)

    try {
      let { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: "post",
        data: {
          name: profile.name,
          email: profile.email,
          password: profile.id,
          apiKeyToken: config.apiKeyToken
        }
      });

      debug(`Response sign provider status>>>`, status);

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    } catch (error) {
      boom.notFound("AXIOS", error);
    }
  }
);

oAuth2Strategy.userProfile = function(accessToken, done) {
  this._oauth2.get(GOOGLE_USERINFO_URL, accessToken, (err, body) => {
    debug(`User Profile Retrieved`);
    if (err) {
      return done(err);
    }

    try {
      const { sub, name, email } = JSON.parse(body);

      const profile = {
        id: sub,
        name,
        email
      };

      done(null, profile);
    } catch (parseError) {
      return done(parseError);
    }
  });
};

passport.use("google-oauth", oAuth2Strategy);
