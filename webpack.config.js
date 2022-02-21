const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction
//   ? MiniCssExtractPlugin.loader
//   : "style-loader";

const baseConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, "css-loader"],
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      title: 'RS-lang',
      inject: 'body',
      favicon: './src/assets/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        // { from: './src/assets', to: 'assets' },
        { from: path.join(__dirname, 'src/assets/'), to: path.join(__dirname, 'dist/assets') },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
