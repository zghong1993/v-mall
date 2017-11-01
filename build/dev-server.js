require('./check-versions')()
const config = require('./config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const opn = require('opn') // 强制打开浏览器
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable
const app = express()
const compiler = webpack(webpackConfig)
// webpack-dev-middleware的作用
// 1.将编译后的生成的静态文件放在内存中,所以在npm run dev后磁盘上不会生成文件
// 2.当文件改变时,会自动编译。
// 3.当在编译过程中请求某个资源时，webpack-dev-server不会让这个请求失败，而是会一直阻塞它，直到webpack编译完毕
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
})
// webpack-hot-middleware的作用就是实现浏览器的无刷新更新
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
})
// 声明hotMiddleware无刷新更新的时机:html-webpack-plugin 的template更改之后
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({
      action: 'reload',
    })
    cb()
  })
})
// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options,
    }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// serve webpack bundle output
app.use(devMiddleware)
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
const uri = `http://localhost:${port}`
let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})
console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}\n`)
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})
const server = app.listen(port)
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  },
}
