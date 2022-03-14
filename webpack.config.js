const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/manifest.json'), to: 'manifest.json' },
        { from: path.resolve('src/icon.png'), to: 'icon.png' },
      ],
    }),
    new HTMLWebpackPlugin({
      title: 'React Extension',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
