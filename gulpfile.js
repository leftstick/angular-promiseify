'use strict';

var gulp = require('gulp');

gulp.task('default', function() {
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');

    return gulp.src('./angular-promiseify.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./'));
});
