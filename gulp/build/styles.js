var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	stripCssComments = require('gulp-strip-css-comments'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	runSequence = require('run-sequence'),
	config = require('../config').sass;

//Compila o SASS
gulp.task('build-styles', function() {
	return gulp.src(config.src + '/**.scss')
		.pipe(sass({
			// includePaths: require('node-bourbon').with('other/path', 'another/path') 
			// - or - 
			includePaths: require('node-bourbon').includePaths
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(rename(config.outputName))
		.pipe(gulp.dest(config.dest))
		.pipe(livereload());
});

gulp.task('css-deploy', function() {
  return gulp.src(config.dest + '/*.css')
    .pipe(cleanCSS())
    .pipe(stripCssComments({preserve: false}))
    .pipe(gulp.dest(config.dest));
});