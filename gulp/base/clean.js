var gulp = require('gulp'),
    clean = require('gulp-clean');

//CLEAN
gulp.task('cleanCss', function() {
	return gulp.src('./css')
		.pipe(clean());
});

gulp.task('cleanJs', function() {
	return gulp.src('./js', {
			read: false
		})
		.pipe(clean());
});

gulp.task('cleanAll', function() {
	gulp.start('cleanCss', 'cleanJs');
});
