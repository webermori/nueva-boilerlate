var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	livereload = require('gulp-livereload');

//Watch
gulp.task('watch', function() {
	livereload.listen();
	//browserSync.reload();

	//Gulpfile
	gulp.watch(['./gulpfile.js'], ['default']);

	//PHP
	gulp.watch(['./*.php', './__source/**/*.php'], livereload.reload);

	//CSS
	gulp.watch(['./assets/sass/**/*.scss'], ['sass-lint', 'sass']);

	//Js
	gulp.watch(['./assets/js/app/**/*.js'], ['lint', 'build-scripts']);

	gulp.runSequence

	//gulp.watch(['./assets/js/libs/*.js', './assets/js/app.js'], ['lint', 'scripts']);
});


