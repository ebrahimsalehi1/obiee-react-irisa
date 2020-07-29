const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "index.js",
        path: path.resolve(__dirname,"build")
    },
    devServer:{
        contentBase: path.join(__dirname,"build"),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin()],
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