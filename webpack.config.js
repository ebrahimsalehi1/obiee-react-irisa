const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: 
        "./src/index.js",
    output: {
            path: path.resolve( __dirname, 'dist' ),
            filename: 'main.js',
            publicPath: '/front/dist/',
        },
    node: {
        fs: 'empty',
      },    
    plugins: [new HtmlWebpackPlugin(
        {
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: "index.html",
        }
    ),
    new CopyWebpackPlugin({
        patterns:[
            {from:"public/config.json",to:""},
            {from:"public/webservices.json",to:""},
            {from:"public/img/*",to:""},
            {from:"public/fonts/*",to:""},
            {from:"public/css/*",to:""},
        ]
    }),
    new WriteFileWebpackPlugin({
        test: /webservices.json/,
    })
],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'fonts',
                }
            },
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            }            
        ]
    }    
}
