const path = require('path');
const webpack = require('webpack');
const isProd = process.env.production ? 'production' : 'development';

const getAPI = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://production.com';

    case 'development':
      return 'https://jsonplaceholder.typicode.com/users/1';
  }
};

module.exports = env => {
  console.log(isProd);
  return {
    mode: isProd,
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, './public/dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          API_URL: JSON.stringify(getAPI()),
        },
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
