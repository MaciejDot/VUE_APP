'use strict'
const path = require('path')

module.exports = {
  dev: {
    proxyTable: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
    },

    // Various Dev Server settings
    host: 'localhost',
    port: 8080, 

    // skipping other options as they are only convenience features
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,

    // skipping the rest ...
  },
}