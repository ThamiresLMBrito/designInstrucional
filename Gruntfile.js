module.exports = function (grunt) {

    grunt.initConfig({

        watch: {

            src: {
                files: [
                    'components/**/*.*',
                    'index.html',
                    'interatividades/**/*.*',
                    'contents/*.html'
                ],
                tasks: ['concat', 'sass', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            options: {
                livereload: true,
            },
        },

        concat: {

            options: {

                separator: '\n \n'

            },


            scripts: {

                src: ['components/**/*.js'],
                dest: 'src/main.js',
            },

            intScripts: {

                src: ['interatividades/**/*.js'],
                dest: 'src/ints.js',
            },

            styles: {

                src: ['components/**/*.scss'],
                dest: 'src/main.scss'
            },

            intStyles: {

                src: ['interatividades/**/*.scss'],
                dest: 'src/ints.scss'
            }

        },

        browserSync: {
            public: {
                bsFiles: {
                    src: ['src/**/*']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'src/main.css': 'src/main.scss',
                    'src/ints.css': 'src/ints.scss'
                }
            }


        },
        uglify: {
            my_target: {
                files: {
                    'assets/main/main.min.js': ['src/main.js']
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {

                    'assets/main/main.min.css': ['src/*.css'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'sass', 'cssmin', "browserSync", "watch"]);


};