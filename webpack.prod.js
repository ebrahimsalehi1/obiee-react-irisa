const {merge} = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig,
    {
        devtool: 'source-map',
        mode:'production'
    }
)