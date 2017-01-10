const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.development.config.js');
const path = require('path');

const port = 3000;
const app = express();

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
  res.end();
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    process.stderr.write(`${err}\n`);
    process.exit(1);
    return;
  }

  process.stdout.write(`Listening on port ${port}.\n`);
});
