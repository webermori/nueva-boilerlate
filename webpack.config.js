var webpack = require('webpack'),
    path = require('path'),
    LiveReloadPlugin = require('webpack-livereload-plugin');    

module.exports = {

    entry: ['./src/js/app.js'],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'nva-bundle.js'
    },
    module: {
        rules: [
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin(),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
    ]
};