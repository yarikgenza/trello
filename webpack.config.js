const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'], include: path.join(__dirname, 'app')
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.png$/, loader: "url-loader?limit=100000"
      },
      {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  }
};
