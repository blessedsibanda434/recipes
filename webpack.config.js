const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist/assets/media"),
        //stats: 'errors-only',
        open: true,
        port: 3000,
        compress: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // babel-loader
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // html-loader
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

module.exports = config;
