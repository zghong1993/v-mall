// vue.config.js
const path = require('path')

/* eslint-disable  */
module.exports = {
  devServer: {
    port: '9091',
    proxy: {
      '/api': {
        target: 'https://m.idf66.com',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', '.json', '*'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
  },
}
