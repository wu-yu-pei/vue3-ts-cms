// const path = require('path')

module.exports = {
  // publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
