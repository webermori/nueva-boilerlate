var gulp = require('gulp'),
	copy = require('gulp-contrib-copy'),
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
	browserSync = require('browser-sync').create(),
	runSequence = require('run-sequence'),
	comment = ['/*****************************************',
  ' * <%= pkg.name %>',
  ' * <%= new Date() %>',
  ' *****************************************/',
  ''].join('\n');

// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "localhost:80/nueva_boilerplate/",
        host: '192.168.1.108',
        port: 3000,
        open: 'external'
    });
});

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
		//'./bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui.js',
		'./bower_components/materialize/js/initial.js',
		'./bower_components/materialize/js/jquery.easing.1.3.js',
		'./bower_components/materialize/js/global.js',
		'./bower_components/materialize/js/animation.js',
		'./bower_components/materialize/js/collapsible.js',
		'./bower_components/materialize/js/dropdown.js',
		'./bower_components/materialize/js/forms.js',
		'./bower_components/materialize/js/hammer.min.js',
		'./bower_components/materialize/js/jquery.hammer.js',
		'./bower_components/materialize/js/sideNav.js',
		'./bower_components/materialize/js/velocity.min.js',
		// './bower_components/materialize/js/buttons.js',
		// './bower_components/materialize/js/cards.js',
		// './bower_components/materialize/js/carousel.js',
		// './bower_components/materialize/js/character_counter.js',
		// './bower_components/materialize/js/chips.js',
		// './bower_components/materialize/js/jquery.timeago.min.js',
		// './bower_components/materialize/js/leanModal.js',
		// './bower_components/materialize/js/materialbox.js',
		// './bower_components/materialize/js/parallax.js',
		// './bower_components/materialize/js/pushpin.js',
		// './bower_components/materialize/js/scrollFire.js',
		// './bower_components/materialize/js/scrollspy.js',
		// './bower_components/materialize/js/slider.js',
		// './bower_components/materialize/js/tabs.js',
		// './bower_components/materialize/js/toasts.js',
		// './bower_components/materialize/js/tooltip.js',
		// './bower_components/materialize/js/transitions.js',
		// './bower_components/materialize/js/waves.js',
		// './bower_components/materialize/js/date_picker/picker.js',
		// './bower_components/materialize/js/date_picker/picker.date.js',
		'./bower_components/slick-carousel/slick/slick.min.js',
		'./bower_components/parsleyjs/dist/parsley.min.js',
		'./bower_components/parsleyjs/dist/i18n/pt-br.js',
		'./assets/js/app.js' 
	])
    .pipe(concat('nva-applications.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('jsVendor', function(){
     gulp.src([
        './bower_components/html5-boilerplate/dist/js/vendor/*'
        ])
        .pipe(copy())
        .pipe(gulp.dest('js/vendor/'));
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

//CLEAN
gulp.task('cleanImg', function() {
    return gulp.src('./images/**/*')
       .pipe(clean());
});

gulp.task('cleanCss', function() {
    return gulp.src('./css', { read: false })
        .pipe(clean());
});
gulp.task('cleanJs', function() {
    return gulp.src('./js', { read: false })
        .pipe(clean());
});

//Watch
gulp.task('watch', function() {
	livereload.listen();
	browserSync.reload();
	//CSS
    gulp.watch([ './assets/sass/**/*.scss' ], [ 'styles' ]);
    //Js
    gulp.watch([ './assets/js/libs/*.js', './assets/js/app.js' ], [ 'lint', 'scripts' ]);
});

//Tasks

gulp.task('deploy', function(callback) {
  runSequence(['cleanCss', 'cleanImg', 'cleanJs'], ['styles', 'scripts'],['scriptsDeploy', 'jsVendor', 'cssmin', 'imagemin'], callback);
});

gulp.task('imgBuild', function(callback) {
  runSequence('cleanImg', 'imagemin', callback);
});

gulp.task('bs', function(callback) {
  runSequence('default','browserSync', callback);
});

gulp.task('default', function(callback) {
  runSequence('cleanCss', ['lint', 'jsVendor', 'scripts', 'styles', 'imagemin'], 'watch', callback);
});