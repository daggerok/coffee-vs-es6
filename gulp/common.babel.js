import gulp       from 'gulp'
import browserify from 'browserify'
import babelify   from 'babelify'
import sources    from 'vinyl-source-stream'
import cssnano    from 'gulp-cssnano'
import concat     from 'gulp-concat'
import livereload from 'gulp-livereload'
import {handle}   from './error-hendler.babel'

export {
  gulp,
  browserify,
  babelify,
  sources,
  cssnano,
  concat,
  livereload,
  handle
}

export let
debug         = true,
srcDir        = '.',
buildDir      = 'dist',
mainCss       = 'main.css',
mainES6       = 'main.es6',
mainCoffee    = 'main.coffee',
bundleCss     = 'bundle.css',
bundleES6     = 'bundle.es6.js',
bundleCoffee  = 'bundle.coffee.js',
vendorDir     = 'node_modules',
cssFiles      = [
  `${vendorDir}/bootstrap/dist/css/bootstrap.css`,
  `${srcDir}/${mainCss}`
]