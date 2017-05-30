var gulp = require('gulp'),
    clean = require('gulp-clean'),
    pathCss = require('../config').sass,
    pathJs = require('../config').js;
    pathImg = require('../config').img;

//CLEAN
gulp.task('clean-build', function() {
	return gulp.src('./public/build/*')
		.pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src(pathCss.dest + '/lpf-styles.css')
		.pipe(clean());
});

gulp.task('clean-img', function() {
	return gulp.src(pathImg.dest + '/*.*')
		.pipe(clean());
});

gulp.task('clean-favicon', function() {
	return gulp.src(pathImg.dest + '/favicon')
		.pipe(clean());
});

gulp.task('clean-svg', function() {
	return gulp.src(pathImg.dest + '/svg-sprite')
		.pipe(clean());
});

gulp.task('clean-js-app', function() {
	return gulp.src(pathJs.dest + '/app')
		.pipe(clean());
});

gulp.task('clean-js-lib', function() {
	return gulp.src(pathJs.dest + '/lib', {
			read: false
		})
		.pipe(clean());
});

gulp.task('clean-js', function() {
	gulp.start('clean-js-app', 'clean-js-lib');
});






//CLEAN
gulp.task('cleanCss', function() {
	return gulp.src('./css')
		.pipe(clean());
});

gulp.task('cleanJs', function() {
	return gulp.src('./js', {
			read: false
		})
		.pipe(clean());
});

gulp.task('cleanJsRequire', function() {
	return gulp.src('./js/requirejs', {
			read: false
		})
		.pipe(clean());
});


gulp.task('cleanAll', function() {
	gulp.start('cleanCss', 'cleanJs');
});
