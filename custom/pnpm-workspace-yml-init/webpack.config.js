// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { babelNodeConfig, babelWebConfig } = require('./configs/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
  plugins: [],
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
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
module.exports = (env, args) => {
  const _isProduction = isProduction || args.mode === 'production';
  const isReport = env.report === 'true';
  console.log({ isReport });
  if (_isProduction) {
    node18ESMWepbackConfig.mode = 'production';
    nodeNonModuleWebpackConfig.mode = 'production';
    node18ESMWepbackConfig.plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: isReport,
        analyzerMode: isReport ? 'server' : 'static',
        analyzerPort: 'auto',
      })
    );
  } else {
    node18ESMWepbackConfig.mode = 'development';
    nodeNonModuleWebpackConfig.mode = 'development';
  }
  const finalConfigs = [
    merge(commonConfig, babelWebConfig, node18ESMWepbackConfig),
    merge(commonConfig, babelNodeConfig, nodeNonModuleWebpackConfig),
  ];
  // return a mjs config for imports
  // return a js config for require
  return finalConfigs;
};
