import {gulp, srcDir, livereload} from './common.babel'

gulp.task('watch', ['default'], () => {
  livereload.listen({basePath: srcDir})
  gulp.watch(`${srcDir}/**/*.js`, ['es6'])
  gulp.watch(`${srcDir}/**/*.css`, ['css'])
  gulp.watch(`${srcDir}/**/*.html`, ['default'])
  gulp.watch(`${srcDir}/**/*.coffee`, ['coffee'])
})