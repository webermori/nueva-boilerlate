var gulp = require('gulp'),
	requireDir = require('require-dir'),
	runSequence = require('run-sequence');
	
requireDir('./gulp', { recurse: true });

gulp.task('build', function(callback) {
	runSequence(['lint'], ['styles', 'scripts'], 'watch', callback);
});

gulp.task('default', function() {
    gulp.start('build');
});
