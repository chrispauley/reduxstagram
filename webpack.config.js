const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); 
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: [ path.resolve(__dirname, './src/reduxstagram')
    ],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: 'public'
    },
    devServer: {
      contentBase: path.join(__dirname, "src"),
      hot: false,
      port: 9000,
      publicPath: '/static/',
      noInfo: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        }
      ]
    },
    plugins: [
      //   new HtmlWebPackPlugin({
      //   template: "./src/index.html",
      //   filename: "./index.html"
      // }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  };