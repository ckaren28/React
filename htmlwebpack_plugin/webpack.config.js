var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};


// module.exports = {
//   entry: './main.js',
//   output: {
//         filename: "bundle.js",
//         path: __dirname + '/webpacked_code'
//   },
//   module: {
//     loaders: [
//       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
//         ]
//     },
// }
