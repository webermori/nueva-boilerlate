var gulp = require('gulp'),
runSequence = require('run-sequence'),
browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync', function() {
	browserSync.init({
		proxy: "localhost:80/nueva-boilerplate/",
		//host: '192.168.0.104',
		host: '192.168.56.1',
		port: 3000,
		open: 'external'
	});
});

gulp.task('bs', function(callback) {
	runSequence('default', 'browserSync', callback);
});