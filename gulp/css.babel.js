import {gulp, srcDir, bundleCss, cssFiles, concat, buildDir, livereload} from './common.babel'

gulp.task('css', () => {
  return gulp.src(cssFiles)
    .pipe(concat(bundleCss))
    .pipe(gulp.dest(buildDir))
    .pipe(livereload())
})