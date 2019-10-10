const path = require ('path');
const isProd = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';
console.log (isProd);
module.exports = {
  mode: isProd,
  entry: './src/app.js',
  output: {
    path: path.resolve (__dirname, './public/dist'),
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
    ],
  },
};
