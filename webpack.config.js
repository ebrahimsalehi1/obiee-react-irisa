const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: 
        ["babel-polyfill","./src/index.js"],
    // output:{
    //     filename: "index.js",
    //     path: path.resolve(__dirname,"build")
    // },
    node: {
        fs: 'empty',
      },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./public/index.html",
            filename: "index.html",
        }
    ),
    new CopyWebpackPlugin({
        patterns:[
            {
                from:"public/webservices.json",
                to:""
            }
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
