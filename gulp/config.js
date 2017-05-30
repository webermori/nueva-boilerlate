var src = './assets';

module.exports = {
    sass: {
        src: [
            src + "/sass"
        ],
        outputName: 'nva-styles.css',
        dest: "./css"
    },

    js: {
        src: [
            src + "/js"
        ],
        outputName: "nva-applications.js",
        dest: "./js"
    },

    img: {
        src: [
            src + "/img"
        ],
        dest: "./images"
    }
};