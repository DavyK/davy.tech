var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    devServer: {
        contentBase: path.join(__dirname, "./"),
        compress: true,
        port: 9000
    },
    entry: {
        'js/davy-tech.js': APP_DIR + '/js/index.js',
    },
    module : {
        rules : [{
            test : /\.js?/,
            include : APP_DIR,
            loader : 'babel-loader',
            options: {
                presets: ['env', 'react'],
            },
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }],
    },
    devtool: 'sourcemap',
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/js/davy-tech.js',
    },
    plugins: [
        new ExtractTextPlugin('dist/css/index.css')
    ],
};

module.exports = config;
