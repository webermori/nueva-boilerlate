var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    runSequence = require('run-sequence');

gulp.task('imagemin', function() {
	return gulp.src('./images/_original/*')
		.pipe(changed('./images'))
		.pipe(imagemin())
		.pipe(gulp.dest('./images'))
});

gulp.task('img', function(callback) {
    runSequence('imagemin', callback);
});
