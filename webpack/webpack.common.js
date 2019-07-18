const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack'); // to access built-in plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[hash]-[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[hash]-[name].[ext]'
                    }
                }
                ]
            },
        ],
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve("./src/index.pug"),
            // template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin(),
    ],
};