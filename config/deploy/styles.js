var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	cleanCSS = require('gulp-clean-css'),
	stripCssComments = require('gulp-strip-css-comments'),
	config = require('../config').sass,
	header = require('gulp-header'),
	pkg = require('../../package.json'),
	comment = ['/************************************************************',
		' * <%= pkg.name %> - <%= pkg.author %>',
		' * <%= new Date() %>',
		' ************************************************************/',
		''
	].join('\n');

gulp.task('css-deploy', function() {
  return gulp.src(config.dest + '/*.css')
    .pipe(cleanCSS())
    .pipe(stripCssComments({preserve: false}))
    .pipe(header(comment, {
		pkg: pkg
	}))
    .pipe(gulp.dest('./dist/css'));
});