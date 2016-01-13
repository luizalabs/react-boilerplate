const path = require('path');
const webpack = require('webpack');
const sassPaths = require('node-neat').includePaths.map((sassPath) => {
  return `includePaths[]=${sassPath}`;
}).join('&');
const cssnext = require('cssnext');
const bemLinter = require('postcss-bem-linter');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './app/index'
  ],
  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: `style!css?sourceMap!postcss!sass?${sassPaths}` },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            ['transform-decorators-legacy'],
            ['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }, {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }]
            }]
          ]
        }
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: false,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: false,
    contentBase: 'public/'
  },
  postcss() {
    return [cssnext(), bemLinter()];
  }
};
