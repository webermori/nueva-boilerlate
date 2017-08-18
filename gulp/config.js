var src = './assets';
var prefix = 'nva';
module.exports = {
    sass: {
        src: [
            src + '/sass'
        ],
        outputName: prefix + '-styles.css',
        dest: './css'
    },

    js: {
        src: [
            src + '/js'
        ],
        outputName: prefix + '-app.js',
        dest: './js'
    },

    img: {
        src: [
            src + '/img'
        ],
        dest: './images'
    }
};