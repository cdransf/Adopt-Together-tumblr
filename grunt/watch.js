module.exports = {
    grunt: { files: ['Gruntfile.js'] },
    sass: {
        files: ['build/scss/*.scss', 'build/scss/*/*.scss'],
        tasks: ['sass']
    },
    css: {
        files: 'build/css/main.css',
        tasks: ['csscomb', 'cssmin']
    },
    concat: {
        files: 'build/js/*.js',
        tasks: ['uglify','concat']
    },
    uglify: {
        files: 'build/js/*.js',
        tasks: ['uglify']
    }
};
