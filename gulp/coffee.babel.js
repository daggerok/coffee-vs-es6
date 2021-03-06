import {gulp, browserify, srcDir, mainCoffee, bundleCoffee, debug, sources, handle, buildDir, livereload} from './common.babel'

gulp.task('coffee', () => {
  return browserify({
      debug,
      extensions: ['.coffee']
    })
    .add(`${srcDir}/${mainCoffee}`)
    .transform("coffeeify", {
      sourceMaps: debug,
      bare: false
    })
    .bundle()
    .on('error', handle)
    .pipe(sources(bundleCoffee))
    .pipe(gulp.dest(buildDir))
    .pipe(livereload())
})