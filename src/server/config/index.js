require('dotenv').config();

const apiUrlEnv =
  process.env.NODE_ENV !== 'production' ?
    process.env.API_URL_DEV :
    process.env.API_URL_PROD;

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  apiUrl: apiUrlEnv,
  appUrl: process.env.APP_URL,
  apiKeyToken: process.env.API_KEY_TOKEN,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
  twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  facebookClientId: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
};

module.exports = { config };
