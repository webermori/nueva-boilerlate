var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	copy = require('gulp-contrib-copy'),
	uglify = require('gulp-uglify'),
	runSequence = require('run-sequence'),
	config = require('../config').js;

//Verificação de erros no JS
gulp.task('lint', function() {
	//return gulp.src('./assets/js/app.js')
	return gulp.src(config.src + '**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('build-scripts', function() {
	gulp.src(config.src  + '/app/**/*.js')
		.pipe(gulp.dest(config.dest + '/app'));
});

gulp.task('jsmin', function() {
	gulp.src(config.src  + '/app/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(config.dest + '/app'));
});


//Vendor generate
gulp.task('build-js-vendor', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/npm-modernizr/modernizr.js',
		'./node_modules/requirejs/require.js',
	])
	.pipe(uglify())
	.pipe(gulp.dest(config.dest + '/vendor'));
});

gulp.task('clone-js-lib', function() {
	return gulp.src([
		'./node_modules/enquire.js/dist/enquire.min.js',
		'./node_modules/slick-carousel/slick/slick.min.js',
		'./node_modules/parsleyjs/dist/parsley.min.js',
		'./node_modules/parsleyjs/dist/i18n/pt-br.js',
		'./node_modules/superfish/dist/js/superfish.min.js',
		'./node_modules/superfish/dist/js/hoverIntent.js',
		'./node_modules/responsive-tabs/js/jquery.responsiveTabs.min.js',
		'./bower_components/semantic/dist/components/accordion.min.js',
		'./bower_components/semantic/dist/components/sidebar.min.js',
		'./node_modules/lightslider/dist/js/lightslider.min.js',
		'./node_modules/lightgallery/dist/js/lightgallery.min.js',
		'./node_modules/lightgallery/modules/lg-thumbnail.min.js',
		'./node_modules/jquery-sticky/jquery.sticky.js',
		'./node_modules/gmap3/dist/gmap3.min.js',
		'./node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'
	])
	.pipe(gulp.dest(config.dest + '/lib/'));
});