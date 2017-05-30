var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
	runSequence(['lint'], ['build-styles', 'build-scripts'], 'watch', callback);
});

gulp.task('default', function() {
    gulp.start('build');
});


/*----------  IMAGES  ----------*/

gulp.task('svg', function(callback) {
	runSequence('svg-build', 'build-styles', 'watch', callback);
});

gulp.task('favicon', function(callback) {
	runSequence('clean-favicon', 'build-favicon', callback);
});


/*----------  JS  ----------*/

gulp.task('js', function(callback) {
	runSequence('build-scripts', 'watch', callback);
});

gulp.task('js-lib', function(callback) {
	runSequence('clean-js-lib', 'build-js-lib', 'build-scripts', callback);
});


/*----------  CSS  ----------*/

gulp.task('css', function(callback) {
	runSequence(['build-styles'], 'watch', callback);
});


