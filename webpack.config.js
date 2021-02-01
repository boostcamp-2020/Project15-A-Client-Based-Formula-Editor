const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['@babel/polyfill', './src/index'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/build`),
  },
  mode: 'none',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: '/node_modules',
      },
      // font loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'flie-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 8000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html', // output으로 출력할 파일은 index.html 이다.
      favicon: 'public/favicon.ico',
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build'],
    }),
    new webpack.BannerPlugin({
      banner: `build time : ${new Date().toLocaleTimeString()}`,
    }),
  ],
};
