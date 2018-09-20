module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
              sourceMap: true
            },
            dist: {
                files: {
                'css/style.css': 'sass/style.scss'
                },
            },
        },

        watch: {
            css: {
              files: '**/*.scss',
              tasks: ['sass']
            }
        }
    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s). 
    grunt.registerTask('default', ['sass', 'watch']);
};