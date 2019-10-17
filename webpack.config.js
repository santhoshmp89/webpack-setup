const path = require ('path');
// const isProd = process.env.NODE_ENV === 'production'
//   ? 'production'
//   : 'development';

module.exports = env => {
  return {
    mode: env.NODE_ENV,
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
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      contentBase: path.join (__dirname, 'public'),
    },
  };
};
