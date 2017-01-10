var src = './assets';

module.exports = {
    sass: {
        src: [
            src + "/sass/**/*.scss"
        ],
        outputName: 'nva-styles.css',
        dest: "./css"
    },

    js: {
        src: [
            src + "/js/**/*.scss"
        ],
        outputName: "nva-applications.js",
        dest: "./js"
    }
};