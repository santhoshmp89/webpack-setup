const path = require('path');
const webpack = require('webpack');
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

function setUpAPI() {
=======
const isProd = process.env.production ? 'production' : 'development';

const getAPI = () => {
>>>>>>> 5cdf851926fff80b24fe9b3a5dd89920eefe26fa
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://production.com';

    case 'development':
<<<<<<< HEAD
      return 'https://developmentcom';

    default:
      return 'https://noAPI.com';
  }
}
=======
      return 'https://jsonplaceholder.typicode.com/users/1';
  }
};
>>>>>>> 5cdf851926fff80b24fe9b3a5dd89920eefe26fa

module.exports = env => {
  console.log(isProd);
  return {
    mode: isProd,
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, './public/dist'),
      filename: 'bundle.js',
    },
    node: {
      fs: 'empty',
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
