// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { babelNodeConfig, babelWebConfig } = require('./configs/index');

/** @type {import('webpack').Configuration} */
const webpackModuleConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/mjs/'),
    filename: 'index.mjs',
    library: {
      type: 'module',
    },
  },
  target: 'node18',
  experiments: {
    outputModule: true,
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts)$/i,
        use: {
          loader: 'babel-loader',
        },
        exclude: ['/node_modules/'],
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: 'asset',
      // },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
const nodeConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/cjs/'),
    filename: 'index.js',
  },
  target: 'node',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts)$/i,
        use: {
          loader: 'babel-loader',
        },
        exclude: ['/node_modules/'],
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: 'asset',
      // },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
module.exports = () => {
  if (isProduction) {
    webpackModuleConfig.mode = 'production';
    nodeConfig.mode = 'production';
  } else {
    webpackModuleConfig.mode = 'development';
    nodeConfig.mode = 'development';
  }
  return [
    merge(babelWebConfig, webpackModuleConfig),
    merge(babelNodeConfig, nodeConfig),
  ];
};
