module.exports = function( grunt ) {
    // load time-grunt and all grunt plugins found in the package.json
    require( 'time-grunt' )( grunt );
    require( 'load-grunt-tasks' )( grunt );
    
    var sassFiles = {
        'static/dist/css/site.css': 'static/src/scss/site.scss'
    };

    var jsFiles = [
        'static/src/js/site.js',
        'static/src/js/helpers/*.js',
    ];

    var uglifyDependencies = {
        'static/dist/js/vendor.js': ['static/src/js/vendor.js']
    };

    var uglifyJs = {
      'static/dist/js/site.js': jsFiles
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: [
                'Gruntfile.js',
                'static/src/js/**/*.js',
                '!static/src/js/vendor.js'
            ]
        },

        bower: {
            install: {
                options: {
                    copy: false,
                    install: true
                }
            }
        },

        uglify: {
            options: {

            },
            dev: {
                options: {
                    sourceMap: true
                },
                files: uglifyJs
            },
            dist: {
                options: {
                    report: 'gzip'
                },
                files: uglifyDependencies
            }
        },

        sass: {
            dist: {
                options: {
                    // compression of css
                    style: 'compressed',
                    // TODO: if necessary
                    // require: ['susy', 'breakpoint'],
                    loadPath: [
                      'bower_components/bourbon/app/assets/stylesheets'
                    ]
                },
                files: sassFiles
            }
        },

        shell : {
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'jekyll serve'
            }
        },

        watch: {
            files : [ '_layouts/*.html',
                      '_posts/*.markdown',
                      'static/src/scss/**/*.scss',
                      'static/src/js/**/*.js',
                      '_config.yml',
                      'index.html',
                      '404.html' ],
            tasks : [ 'sass',
                      'shell:jekyllServe' ],
            options : {
                spawn : false,
                interrupt : true,
                atBegin : true,
                livereload : true
            }
        },

        bower_concat: {
            dist: {
                // Only created in the SRC directory to be uglified.
                dest: 'static/src/js/vendor.js',
                exclude: [
                    'bourbon', 'susy', 'breakpoint'
                ],
                dependencies: {

                }
            },
        },

        
    });

    // Load plugins here.
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-bower-concat');

    // Default tasks used during development
    grunt.registerTask('default', [
        'jshint',
        'bower:install',
        'bower_concat',
        'uglify',
        'sass'
    ]);

    grunt.registerTask( 'deploy', [ 'sass', 'shell:jekyllBuild' ] );
};