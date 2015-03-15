module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'       
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'] 
    }
};
