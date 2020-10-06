const {merge} = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig,()=>{
    return {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,"dist"),
            compress: true,
            port: 9000        
        },
        mode:'development'
    }
})