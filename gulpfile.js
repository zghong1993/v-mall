const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const proxy = require('http-proxy-middleware')

// 静态服务器
gulp.task('browser-sync', () => {
  const middleware = proxy(['/api'], { target: 'https://food-m.wens.com.cn', changeOrigin: true })
  browserSync.init({
    server: {
      baseDir: './dist',
      middleware,
    },
  })
})
gulp.task('default', ['browser-sync'])
