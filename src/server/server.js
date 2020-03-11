/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log(`Environment set to > ${ENV}`);
  const wepackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(wepackConfig);
  const serverConfig = { port: PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}
app.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Platzi Video</title>
        <link rel="stylesheet" href="assets/app.css" type="text/css">
      </head>
      <body>
        <div id="app"></div>
        <script src="assets/app.js" type="text/javascript"></script>
      </body>
    </html >
    `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port:', PORT);
});
