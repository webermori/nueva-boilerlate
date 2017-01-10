var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	runSequence = require('run-sequence'),
	cleanCSS = require('gulp-clean-css'),
	banner = require('gulp-banner'),
	pkg = require('../package.json'),
	comment = ['/*****************************************',
		' * <%= pkg.name %>',
		' * <%= new Date() %>',
		' *****************************************/',
		''
	].join('\n');

//Minifica JS
gulp.task('js-uglify', function() {
	return gulp.src(['./js/nva-applications.js'])
		.pipe(uglify())
		.pipe(banner(comment, {
			pkg: pkg
		}))
		.pipe(gulp.dest('./js/'));
});

gulp.task('deploy-js', function(callback) {
	runSequence(['scripts'], ['js-uglify'], callback);
});

//Minifica CSS
gulp.task('cssmin', function() {
	return gulp.src('./css/*')
		.pipe(cleanCSS({
			keepSpecialComments: 0
		}))
		.pipe(banner(comment, {
			pkg: pkg
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('deploy-css', function(callback) {
	runSequence(['cleanCss'], ['styles'], ['cssmin'], callback);
});

//Deploy CSS e JS
gulp.task('deploy', ['deploy-css', 'deploy-js']);