module.exports = function( grunt ) {
    // load time-grunt and all grunt plugins found in the package.json
    require( 'time-grunt' )( grunt );
    require( 'load-grunt-tasks' )( grunt );
    
    var lessFiles = {
        'static/dist/css/main.css': 'static/src/less/main.less'
    };

    grunt.initConfig({
        csslint : {
            test : {
                options : {
                    import : 2
                },
                src : [ 'css/main.css' ]
            }
        },

        less: {
            dev: {
                files: lessFiles,
                options: {
                    'sourceMap': true
                }
            },
            dist: {
                files: lessFiles,
                options: {
                    cleancss: true,
                    optimization: 0,
                    report: 'gzip'
                }
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

        watch : {
            files : [ '_layouts/*.html',
                      '_posts/*.markdown',
                      'static/src/less/*.less',
                      '_config.yml',
                      'index.html',
                      '404.html' ],
            tasks : [ 'less',
                      'shell:jekyllServe' ],
            options : {
                spawn : false,
                interrupt : true,
                atBegin : true,
                livereload : true
            }
        }
    });

    // register custom grunt tasks
    grunt.registerTask( 'test', [ 'csslint' ] );
    grunt.registerTask( 'deploy', [ 'less', 'shell:jekyllBuild' ] )
};