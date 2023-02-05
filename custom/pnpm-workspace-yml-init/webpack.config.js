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

/** @type {import('webpack').Configuration} */
const node18ESMWepbackConfig = {
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

/** @type {import('webpack').Configuration} */
const nodeNonModuleWebpackConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: 'index.js',
    clean: true,
  },
  target: 'node18',
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
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
module.exports = () => {
  if (isProduction) {
    node18ESMWepbackConfig.mode = 'production';
    nodeNonModuleWebpackConfig.mode = 'production';
  } else {
    node18ESMWepbackConfig.mode = 'development';
    nodeNonModuleWebpackConfig.mode = 'development';
  }
  return [
    merge(commonConfig, babelWebConfig, node18ESMWepbackConfig),
    merge(commonConfig, babelNodeConfig, nodeNonModuleWebpackConfig),
  ];
};
