var path = require("path");
var webpack = require('webpack')
module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!bootstrap/dist/js/bootstrap.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "public",
    port: 3000
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname,'app/components/Main.jsx')
    },
    extensions: ['.js','.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
