const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
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
    }),
    new UglifyJsPlugin(), // 로더로 처리된 자바스크립트 결과물을 난독화하는 프로그램
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build'],
    }),
    new webpack.BannerPlugin({
      banner: `build time : ${new Date().toLocaleTimeString()}`,
    }),
  ],
};
