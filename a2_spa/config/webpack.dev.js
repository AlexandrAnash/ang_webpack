var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    //этот быстрее 
    //devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',

    output: {
        path: helpers.root('dist_webpack'),
        publicPath: 'http://localhost:80/a2_spa/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    watch: true,
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin({
            proxy: 'http://localhost:80/a2_spa/',
            port: 3000
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});