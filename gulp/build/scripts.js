var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	copy = require('gulp-contrib-copy'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify'),
	babel = require('gulp-babel'),
	runSequence = require('run-sequence'),
	config = require('../config').js;

//Verificação de erros no JS
gulp.task('lint', function() {
	//return gulp.src('./assets/js/app.js')
	return gulp.src(config.src + '**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//Concatena Scripts
// gulp.task('scripts', function() {
// 	return gulp.src([
// 			//'./bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui.js',
// 			//'./bower_components/pushy/js/pushy.min.js',
// 			//'./bower_components/parsleyjs/dist/parsley.min.js',
// 			//'./bower_components/parsleyjs/dist/i18n/pt-br.js',
// 			'./bower_components/sticky-kit/jquery.sticky-kit.min.js',
// 			'./assets/js/app.js'
// 		])
// 		//.pipe(concat('nva-applications.js'))
// 		.pipe(concat(config.outputName))
// 		//.pipe(gulp.dest('./js/'));
// 		.pipe(gulp.dest(config.dest));
// });

gulp.task('build-scripts', function() {
	return gulp.src(config.src + '/**/*.js')
		.pipe(gulp.dest(config.dest));
});

//Vendor generate
gulp.task('vendor', function() {
	return gulp.src([
			'./bower_components/html5-boilerplate/dist/js/vendor/*',
			'./node_modules/requirejs/require.js',
		])
		.pipe(gulp.dest('js/vendor/'));
});

gulp.task('clone-js-lib', function() {
	return gulp.src([
			//'./bower_components/pushy/js/pushy.min.js',
			'./node_modules/slideout/dist/slideout.min.js',
			'./bower_components/slick-carousel/slick/slick.min.js',
			'./bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui.js',
			'./bower_components/sticky-kit/jquery.sticky-kit.min.js',
			'./node_modules/superfish/dist/js/superfish.min.js',
			'./node_modules/superfish/dist/js/hoverIntent.js',
			'./node_modules/uikit/dist/js/uikit.min.js'
		])
		.pipe(gulp.dest('js/lib/'));
});