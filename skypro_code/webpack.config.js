const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    plugins: [
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        scriptLoading: 'blocking',
        inject: 'body'
      }),
      new MonacoWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.styl$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "stylus-loader"
            ]
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.coffee$/,
            loader: "coffee-loader",
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },      
  };
  