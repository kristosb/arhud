const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/stereogram.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'stereogram.js',
    library: 'stereogram',
    libraryTarget: 'umd',
    //libraryExport: 'default',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
