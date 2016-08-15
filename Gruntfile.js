'use strict';
module.exports = function ( grunt ) {

    grunt.initConfig( {
                          autoprefixer: {
                              options: {
                                  browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
                              },
                              main: {
                                  expand: true,
                                  flatten: true,
                                  src: 'src/css/*.css',
                                  dest: 'src/css/'
                              }
                          },
                          copy : {
                              dist : {
                                  files : [
                                      {
                                          expand: true,
                                          cwd : "src",
                                          src : [
                                              '**/*.html',
                                              '**/*.pdf',
                                              'components/**/*',
                                              'js/**',
                                              'css/*.css',
                                              'img/*.{png,jpg}'
                                          ],
                                          dest : 'dist/'
                                      }
                                  ]
                              }
                          },
                          clean : {
                              dist : ['dist']
                          },
                          less  : {
                              default : {
                                  options : {
                                      paths : [ 'src' ]
                                  },
                                  files   : {
                                      'src/css/main.css' : 'src/less/main.less'
                                  }
                              }
                          },
                          watch : {
                              css   : {
                                  files   : [ '**/*.less' ],
                                  tasks   : [ 'less' ],
                                  options : {
                                      spawn : false
                                  }
                              },
                          },
                          browserSync  : {
                              dev : {
                                  bsFiles : {
                                      src : [ 'src/css/*.css', 'src/**/*.html', 'src/js/*.js' ]
                                  },
                                  options : {
                                      server : {
                                          baseDir : "./src"
                                      }
                                  }
                              }

                          },
                          'ftp-deploy' : {
                              dist : {
                                  auth : {
                                      host: 'timothydockins.com',
                                      port: 21
                                  },
                                  src: 'dist',
                                  dest: './public_html/crud-demo',
                                  exclusions : ['components']
                              },
                              full : {
                                  auth : {
                                      host: 'timothydockins.com',
                                      port: 21
                                  },
                                  src: 'dist',
                                  dest: './public_html/crud-demo',
                              }
                          },
                          connect: {
                              server: {
                                  options : {
                                      port: 8000,
                                      hostname: '*',
                                      base: 'src'
                                  }
                              },
                              test : {
                                  options : {
                                      port:8001,
                                      hostname: '*',
                                      base: 'dist'
                                  }
                              }
                          }

                      } );
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-browser-sync' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-ftp-deploy' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-autoprefixer' );

    grunt.registerTask( 'deploy' , [ 'pug', 'less:production', 'autoprefixer', 'clean:dist', 'copy:dist', 'ftp-deploy:dist' ]);
    grunt.registerTask( 'deploy-full' , [ 'pug', 'less:production', 'autoprefixer', 'clean:dist', 'copy:dist', 'ftp-deploy:full' ]);
    grunt.registerTask( 'dev', ['less', 'browserSync'])


}