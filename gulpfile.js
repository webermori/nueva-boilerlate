var gulp = require('gulp'),
	bourbon = require('node-bourbon').includePaths,
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	changed = require('gulp-changed'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	livereload = require('gulp-livereload'),
	banner = require('gulp-banner'),
	pkg = require('./package.json'),
	comment = ['/*****************************************',
  ' * <%= pkg.name %>',
  ' * <%= new Date() %>',
  ' *****************************************/',
  ''].join('\n');

//Compila o SASS
gulp.task('styles', function() {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({
	      // includePaths: require('node-bourbon').with('other/path', 'another/path') 
	      // - or - 
	      includePaths: require('node-bourbon').includePaths
	    }).on('error', sass.logError))

        .pipe(rename('nva-styles.css'))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

//Minifica CSS
gulp.task('cssmin', function () {
	return gulp.src('./css/*')
		.pipe(cleanCSS({keepSpecialComments : 0}))
		.pipe(banner(comment, {
		    pkg: pkg
		}))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});
 
gulp.task('clean', function () {
	return gulp.src('./css', {read: false})
		.pipe(clean());
});

gulp.task('imagemin', function(){
	return gulp.src('./assets/img/*')
	.pipe(changed('./images'))
	.pipe(imagemin())
    .pipe(gulp.dest('./images'))
});

//Verificação de erros no JS
gulp.task('lint', function() {
	return gulp.src('./assets/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//Concatena Scripts
gulp.task('scripts', function() {
	return gulp.src([
		'./bower_components/materialize/dist/js/materialize.min.js',
		'./bower_components/slick-carousel/slick/slick.min.js',
		'./assets/js/libs/*.js',
		'./assets/js/app.js' 
	])
    .pipe(concat('nva-applications.js'))
    .pipe(gulp.dest('./js/'));
});

//Task de deploy
gulp.task('scriptsDeploy', function() {
	return gulp.src(['./assets/js/libs/*.js','./assets/js/app.js' ])
    .pipe(concat('nva-scripts.min.js'))
    .pipe(uglify())
	.pipe(banner(comment, {
        pkg: pkg
    }))
    .pipe(gulp.dest('./js/'));
});

//Watch
gulp.task('watch', function() {
	livereload.listen();
	//CSS
    gulp.watch([ './assets/sass/**/*.scss' ], [ 'styles' ]);
    //Js
    gulp.watch([ './assets/js/libs/*.js', './assets/js/app.js' ], [ 'lint', 'scripts' ]);
});

//Tasks
gulp.task('build', [ 'lint', 'scripts', 'styles', 'imagemin' ]);
gulp.task('deploy', [ 'lint', 'scriptsDeploy', 'cssmin' ]);

gulp.task('default', [ 'build', 'watch' ]);
