var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './client/react_components/main.js',
    output: {
        filename: "bundle.js",
        path: __dirname + '/client'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    }
};
