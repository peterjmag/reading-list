var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './app/main.js'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } })
    ]
};
