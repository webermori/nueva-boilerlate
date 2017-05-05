var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	runSequence = require('run-sequence'),
	config = require('../config').sass;

//Compila o SASS
gulp.task('build-styles', function() {
	return gulp.src(config.src)
		.pipe(sass({
			// includePaths: require('node-bourbon').with('other/path', 'another/path') 
			// - or - 
			includePaths: require('node-bourbon').includePaths
		}).on('error', sass.logError))
		.pipe(rename(config.outputName))
		.pipe(gulp.dest(config.dest))
		.pipe(livereload());
});

