var gulp = require('gulp'),
	livereload = require('gulp-livereload');

//Watch
gulp.task('watch', function() {
	//livereload.listen();
	//browserSync.reload();

	//Gulpfile
	gulp.watch(['./gulpfile.js'], ['default']);

	//PHP
	gulp.watch(['./*.php', './__source/**/*.php'], livereload.reload);

	//CSS
	gulp.watch(['./assets/sass/**/*.scss'], ['styles']);

	//Js
	gulp.watch(['./assets/js/requirejs/**/*.js'], ['lint', 'requirejs']);

	//gulp.watch(['./assets/js/libs/*.js', './assets/js/app.js'], ['lint', 'scripts']);
});


