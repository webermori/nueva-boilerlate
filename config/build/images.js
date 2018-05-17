var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    tinypng = require('gulp-tinypng'),
    favicons = require('gulp-favicons'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed'),
    runSequence = require('run-sequence');
    svgSprite = require('gulp-svg-sprite'),
    spritesmith = require('gulp.spritesmith'),
    cssVersioner = require('gulp-css-url-versioner'),
    rename = require('gulp-rename'),
    path = require('../config');
    imgPath = require('../config').img;

var del = require('del');

gulp.task('imagemin', function() {
    return gulp.src(imgPath.src + '/original/**/*.{jpg,gif}')
        .pipe(changed('./dist/img/imagemin'))
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/imagemin'))
});
 
gulp.task('tinypng', function () {
    gulp.src(imgPath.src + '/original/**/*.png')
        .pipe(changed('./dist/img/tinypng'))
        .pipe(tinypng('GWHCP1r0KSNCJmphOWK5B9M1G60JuWCt'))
        .pipe(gulp.dest('./dist/img/tinypng'));
});

gulp.task('copy-images', function(){
    gulp.src(['./dist/img/imagemin/**/*.{jpg,gif}', './dist/img/tinypng/**/*.png'])
    .pipe(gulp.dest(imgPath.dest))
});

gulp.task('clean:imagemin', function () {
  return del('./dist/img/imagemin');
});


/*----------  Favicon  ----------*/

gulp.task('build-favicon', function () {
    return gulp.src(imgPath.src +  '/favicon/favicon.png').pipe(favicons({
        icons: {
            android: false, // Create Android homescreen icon. `boolean`
            appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset: offsetInPercentage }`
            appleStartup: false, // Create Apple startup images. `boolean`
            coast: {
                offset: 25
            }, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset: offsetInPercentage }`
            favicons: true, // Create regular favicons. `boolean`
            firefox: false, // Create Firefox OS icons. `boolean` or `{ offset: offsetInPercentage }`
            windows: false, // Create Windows 8 tile icons. `boolean`
            yandex: false // Create Yandex browser icon. `boolean`
        }
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(imgPath.dest +'/favicons'));
});

//Inseri favicon.ico na raiz do projeto
gulp.task('clone-favicon', function () {
    return gulp.src(imgPath.dest +  '/favicon/favicon.ico')
    .pipe(gulp.dest('./public'));
});


/*----------  SVG  ----------*/
// Concatena todos ícones svg
gulp.task('svg-build', function() {
    gulp.src(imgPath.src + '/svg/*.svg')
        .pipe(svgSprite({
            mode                : {
                symbol          : true 
            },
        }))
        .pipe(gulp.dest(imgPath.dest + '/svg-sprite'));
});


/*----------  Sprite PNG  ----------*/
gulp.task('spritesmith', function () {
    var spriteData = gulp.src(imgPath.src + '/sprite-icons/*.png')
        .pipe(spritesmith({
            imgName: '../images/sprite/sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest(path.root.path + '/sprite'));
    spriteData.css
    .pipe(cssVersioner({version: Math.random()}))
    .pipe(rename({
        prefix: '_',
        extname: '.scss'
    }))
    .pipe(gulp.dest(path.sass.src + '/dist'));
});