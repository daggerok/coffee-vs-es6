import {gulp, browserify, srcDir, mainES6, bundleES6, debug, babelify, sources, handle, buildDir} from './common.babel'

gulp.task('es6', () => {
  return browserify({
      debug,
      extensions: ['.es6']
    })
    .add(`${srcDir}/${mainES6}`)
    .transform(babelify, {sourceMaps: debug})
    .bundle()
    .on('error', handle)
    .pipe(sources(bundleES6))
    .pipe(gulp.dest(buildDir))
})