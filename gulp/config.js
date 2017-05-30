var src = './assets';

module.exports = {
    sass: {
        src: [
            src + "/sass"
        ],
        outputName: 'nva-styles.css',
        dest: "./public/css/site"
    },

    js: {
        src: [
            src + "/js"
        ],
        outputName: "nva-applications.js",
        dest: "./public/js"
    },

    img: {
        src: [
            src + "/img"
        ],
        dest: "./images"
    }
};