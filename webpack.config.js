const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: "./src/index.js",
    // output:{
    //     filename: "index.js",
    //     path: path.resolve(__dirname,"build")
    // },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./public/index.html",
            filename: "index.html"
        }
    )],
    module: {
        rules: [
            {
                test: /\.js$/,
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
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }    
}
