const {merge} = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig,
     {
        devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname,"dist"),
            compress: true,
            port: 9000        
        },
        mode:'development'
    }
)