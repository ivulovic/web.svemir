const { merge } = require('webpack-merge');
const baseDevelopmentConfiguration = require('./base/webpack.dev');
const localCommonConfiguration = require('./webpack.common');

module.exports = merge(baseDevelopmentConfiguration, localCommonConfiguration, {
  devServer: {
    proxy: {
      '/catapi': {
        target: 'https://api.thecatapi.com',
        changeOrigin: true,
        // remove /catapi from url
        pathRewrite: {
          '^/catapi': '',
        },
      },
    },
  },
});
