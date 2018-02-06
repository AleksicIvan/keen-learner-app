const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Jarvis = require('webpack-jarvis')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
}

const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PRODUCTION = process.env.NODE_ENV === 'production'

const entry = PRODUCTION
  ? [
    path.join(paths.JS, 'app.js'),
  ] : [
    path.join(paths.JS, 'app.js'),
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ]

const plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.bundle.css'),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION)
    }),
  ]
  : [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION)
    }),
    new Jarvis()
  ]

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  // devServer: {
  //   contentBase: paths.SRC
  // },

  plugins: plugins,

  module: {
    rules: [
      // js and jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },

      // css
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },

      // images
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },

    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
