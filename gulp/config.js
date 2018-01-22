var src = './assets';
var outputPath = './public';
var prefix = 'nva';
module.exports = {
    sass: {
        src: [
            src + '/sass'
        ],
        outputName: prefix + '-styles.css',
        dest: outputPath + './css'
    },

    js: {
        src: [
            src + '/js'
        ],
        outputName: prefix + '-app.js',
        dest: outputPath + './js'
    },

    img: {
        src: [
            src + '/img'
        ],
        dest: outputPath + './images'
    }
};