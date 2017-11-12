const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const proxy = require('http-proxy-middleware')

// 静态服务器
gulp.task('browser-sync', () => {
  const middleware = proxy(['/api'], {
    target: 'https://m.idf66.com',
    changeOrigin: true,
    cookieDomainRewrite: 'localhost',
  })
  browserSync.init({
    server: {
      baseDir: './dist',
      middleware,
    },
  })
})
gulp.task('default', ['browser-sync'])
