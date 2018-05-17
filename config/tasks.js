var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function() {
	runSequence(['lint'], ['sass', 'build-scripts'], 'watch');
});

gulp.task('default', function() {
    gulp.start('build');
});

/*----------  CSS  ----------*/

gulp.task('css', function() {
	//runSequence('sass-lint', ['sass'], 'watch');
	runSequence('clean-css', ['sass'], 'watch');
});

gulp.task('css-prod', function() {
	//runSequence('sass-lint', ['sass'], 'watch');
	runSequence('css', 'css-deploy');
});


/*----------  JS  ----------*/

gulp.task('js', function() {
	runSequence('lint', 'build-scripts', 'watch');
});

gulp.task('js-lib', function() {
	runSequence('clean-js-lib', 'clone-js-lib', 'build-scripts');
});

gulp.task('js-vendor', function() {
	runSequence('clean-js-vendor', 'build-js-vendor');
});


/*----------  IMAGES  ----------*/

gulp.task('img', function() {
    runSequence('imagemin');
});


gulp.task('sprite', function() {
	runSequence('clean-sprite', 'spritesmith');
});


gulp.task('svg', function() {
	runSequence('clean-svg', 'svg-build', 'sass', 'watch');
});

gulp.task('favicon', function() {
	runSequence('clean-favicon', 'build-favicon', 'clone-favicon');
});


/*----------  DEPLOY  ----------*/

// gulp.task('css-deploy', function() {
//     gulp.start('css-prod');
// });

/*----------  INITIAL TASK  ----------*/

// gulp.task('start', function() {
//     gulp.start('js-vendor');
// });