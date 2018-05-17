var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	config = require('../config').js;

//Vendor generate
gulp.task('build-js-vendor', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/npm-modernizr/modernizr.js'
	])
	.pipe(uglify())
	.pipe(gulp.dest(config.dest + '/vendor'));
});
