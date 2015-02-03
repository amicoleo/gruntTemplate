module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    '../src/js/libs/*.js', // All JS in the libs folder
                    '../src/js/global.js'  // This specific file
                ],
                dest: '../js/production.js'
            }
        }, 
        uglify: {
            build: {
                src: '../js/production.js',
                dest: '../js/production.min.js'
            }
        }, 

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '../src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../img/'
                }]
            }
        }, 

        compass: {
            dist: {
                options: {
                    outputStyle: 'compressed', 
                    sassDir: '../src/sass/', 
                    cssDir: '../src/css/'
                },
            } 
        }, 

        clean: {
        }, 

        autoprefixer: {
            // prefix the specified file
            single_file: {
              options: {
                // Target-specific options go here.
              },
              src: '../src/css/global.css',
              dest: '../css/global.css'
            },
        }, 

        //This task execute specific task when specific files change
        watch: {
            scripts: {
                files: ['../src/js/*.js'],
                tasks: ['buildjs'],
                options: {
                    spawn: false,
                },
            }, 

            css: {
                files: ['../src/sass/*.scss'],
                tasks: ['buildcss'],
                options: {
                    spawn: false,
                }
            },  

            img: {
                files: ['../src/img/*.{png,jpg,gif}'],
                tasks: ['buildimg'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-clean'); 
    grunt.loadNpmTasks('grunt-autoprefixer');
    

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('buildjs', ['concat', 'uglify']);
    grunt.registerTask('buildcss', ['compass', 'autoprefixer']);
    grunt.registerTask('buildimg', ['imagemin']);


    grunt.registerTask('default', ['buildjs', 'buildcss', 'buildimg']);

};