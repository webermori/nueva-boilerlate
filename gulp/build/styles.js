var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	runSequence = require('run-sequence'),
	config = require('../config').sass;

//Compila o SASS
gulp.task('build-styles', function() {
	return gulp.src(config.src + '/**.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
			// includePaths: require('node-bourbon').with('other/path', 'another/path') 
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(rename(config.outputName))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest(config.dest))
		.pipe(livereload());
});