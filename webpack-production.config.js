var webpack = require('webpack'),
    config = require('./config/config'),
    path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    entry: ['./src/js/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: config.prefix + '-bundle.js'
    },
    module: {
         loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                     presets: ['es2015']
                }

            }
         ]
    },
    stats: {
        colors: true
    },

    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8,
                warnings: false,
                output: {
                    comments: false,
                    beautify: false,
                },
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            }
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
    ]
};