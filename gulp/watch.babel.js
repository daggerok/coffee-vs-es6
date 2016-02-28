import {gulp, srcDir} from './common.babel'

gulp.task('watch', ['default', 'server'], () => {
  gulp.watch(`${srcDir}/**/*.js`, ['es6'])
  gulp.watch(`${srcDir}/**/*.css`, ['css'])
  gulp.watch(`${srcDir}/**/*.html`, ['default'])
  gulp.watch(`${srcDir}/**/*.coffee`, ['coffee'])
})