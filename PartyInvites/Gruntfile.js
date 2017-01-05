module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'Content/main.css': 'Views/styles/sass/main.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'Views/scripts',
                    src: '**/*.js',
                    dest: 'Content/js',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            css: {
                files: ['Views/styles/sass/*.scss', 'Views/scripts/*.js'],
                tasks: ['sass', 'uglify']
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
}