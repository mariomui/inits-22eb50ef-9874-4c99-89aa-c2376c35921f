// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { babelNodeConfig, babelWebConfig } = require('./configs/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/** @type {import('webpack').Configuration} */
const commonConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts)$/i,
        use: {
          loader: 'babel-loader',
        },
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
const webpackModuleConfig = {
  output: {
    path: path.resolve(__dirname, 'dist/mjs/'),
    filename: 'index.mjs',
    library: {
      type: 'module',
    },
    clean: true,
  },
  target: 'node18',
  experiments: {
    outputModule: true,
  },
  plugins: [new webpack.ProgressPlugin()],
};
const nodeConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/cjs/'),
    filename: 'index.js',
    clean: true,
  },
  target: 'node',
  plugins: [new webpack.ProgressPlugin()],
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
    merge(commonConfig, babelWebConfig, webpackModuleConfig),
    merge(commonConfig, babelNodeConfig, nodeConfig),
  ];
};
