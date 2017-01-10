var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    cssVersioner = require('gulp-css-url-versioner'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    clean = require('gulp-clean');
    
gulp.task('spritesmith', function () {
    var spriteData = gulp.src('./images/_original/sprite-icons/*.png')
        .pipe(spritesmith({
            imgName: '../images/dist/sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('./dist'));
    spriteData.css
    .pipe(cssVersioner({version: Math.random()}))
    .pipe(rename({
		prefix: "_",
		extname: ".scss"
	}))
    //.pipe(gulp.dest('./assets/sass/dist'));
    .pipe(gulp.dest('./assets/sass/dist'));
});

//CLEAN
gulp.task('clean-sprite', function(){
    return gulp.src(['./images/dist', './assets/sass/dist'])
    .pipe(clean());
});

gulp.task('sprite', ['clean-sprite', 'spritesmith']);
