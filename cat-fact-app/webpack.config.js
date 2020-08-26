const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].min.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Cat Fact!',
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
}

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  }
} else {
  // for more information, see https://webpack.js.org/configuration/dev-server
  config.devServer = {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
  }
}

module.exports = config
