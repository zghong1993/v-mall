require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora') //终端显示的转轮loading
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()
  //删除已编译文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err /
    //在删除完成的回调函数中开始编译
    webpack(webpackConfig, function(err, stats) {
      spinner.stop()
      if (err) throw err
        // 在编译完成的回调函数中,在终端输出编译的文件
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      console.log(chalk.cyan('  Build complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
    })
})
