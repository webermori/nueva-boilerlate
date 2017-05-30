var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
	runSequence(['lint'], ['build-styles', 'build-scripts'], 'watch', callback);
});

gulp.task('default', function() {
    gulp.start('build');
});

/*----------  CSS  ----------*/

gulp.task('css', function(callback) {
	runSequence(['build-styles'], 'watch', callback);
});


/*----------  JS  ----------*/

gulp.task('js', function(callback) {
	runSequence('lint', 'build-scripts', 'watch', callback);
});

gulp.task('js-lib', function(callback) {
	runSequence('clean-js-lib', 'build-js-lib', 'build-scripts', callback);
});


/*----------  IMAGES  ----------*/

gulp.task('img', function(callback) {
    runSequence('imagemin', callback);
});

gulp.task('sprite', ['clean-sprite', 'spritesmith']);

gulp.task('svg', function(callback) {
	runSequence('clean-svg', 'svg-build', 'build-styles', 'watch', callback);
});

gulp.task('favicon', function(callback) {
	runSequence('clean-favicon', 'build-favicon', callback);
});


/*----------  DEPLOY  ----------*/

gulp.task('css-deploy', function() {
    gulp.start('css-prod');
});