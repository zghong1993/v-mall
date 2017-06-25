const gulp = require('gulp')
const browserSync = require('browser-sync').create()
  // 静态服务器
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  })
})
gulp.task('default', ['browser-sync'])
