module.exports = function(gulp, plugins) {
  return function () {
    return plugins.browserify({
      entries: './build/formio.wizard.js',
      debug: true
    })
      .bundle()
      .pipe(plugins.source('formio.wizard.js'))
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.rename('formio.wizard.min.js'))
      // .pipe(plugins.streamify(plugins.uglify()))
      .pipe(gulp.dest('dist/'));
  };
};
