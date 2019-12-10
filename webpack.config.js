const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

function setUpAPI() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://production.com';

    case 'development':
      return 'https://developmentcom';

    default:
      return 'https://noAPI.com';
  }
}

module.exports = env => {
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
          API_HOST: JSON.stringify(setUpAPI()),
        },
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
