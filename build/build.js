require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora') // 终端显示的转轮loading
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()
// 删除已编译文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 在删除完成的回调函数中开始编译
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    // 在编译完成的回调函数中,在终端输出编译的文件
    process.stdout.write(`${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    })}\n\n`)

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'))
  })
})
