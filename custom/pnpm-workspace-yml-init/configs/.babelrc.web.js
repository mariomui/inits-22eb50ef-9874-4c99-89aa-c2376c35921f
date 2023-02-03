const babelWebConfig = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'auto',
                },
              ],
              ['@babel/preset-typescript', {}],
            ],
          },
        },
      },
    ],
  },
};
module.exports = babelWebConfig;
