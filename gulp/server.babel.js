import {gulp, srcDir, server, port} from './common.babel'

gulp.task('server', () => {
  return gulp.src(srcDir)
    .pipe(server({
      port,
      open: true,
      log: 'debug',
      livereload: {
        port: 35729,
        clientConsole: true
      }
    }))
})