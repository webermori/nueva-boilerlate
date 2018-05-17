const src = './src',
    prefix = 'nva',
    path = './public',
    dist = {
        css: path + '/css',
        js: path + '/js',
        img: path + '/images'
    };

module.exports = {
    prefix: 'nva',
    root: {
        path:  path
    },
    sass: {
        src: src + '/sass',
        outputName: prefix + '-styles.css',
        dest: dist.css
    },
    js: {
        src: src + '/js',
        //outputName: prefix + '-app.js',
        dest: dist.js
    },
    img: {
        src: src + '/img',
        dest: dist.img
    }
};