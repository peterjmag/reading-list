var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/dev-server',
        './app/main.js'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
