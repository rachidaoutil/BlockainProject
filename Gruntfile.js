const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
    // Make package info available to tasks
    pkg: grunt.file.readJSON('package.json'),

    // Browserify front-end modules
    browserify: {
      options: { 
        browserifyOptions: {
          debug: true
        }
      },
      js: {
        src: ['src/browser/js/app.js'],
        dest: 'public/app.js'
      }
    },
      
      
    uglify: {
        dist: {
          files: {
            'public/app.min.js': 'public/app.js'
          }
        }
    },
   /*    purgecss: {
      my_target: {
        options: {
          content: ['src/server/views/*.html','src/server/views/*.ejs'],
          extractors: () => [
            {
                extractor: class {
                    static extract(content) {
                        return content.match(/[\w-/:]+(?<!:)/g) || []
                    }
                },
                extensions: ['html', 'vue', 'ejs']
             }
        ]
        },
        files: {
          'public/lessCss.css': ['src/browser/static/tailwind.css']
        }
      }
    },  */







    // Compile Sass stylesheets
    sass: {
      dev: {
        options: {
          implementation:sass,
          sourceMap: true
        },
        files: {
          'public/app.css': 'src/browser/scss/app.scss'
        }
      },
      dist: {
        options: {
          implementation:sass,
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: {
          'public/app.min.css': 'src/browser/scss/app.scss'
        }
      }
    },


    // restart server node process during development
    nodemon: {
      dev: {
        script: 'bin/server.js',
        options: {
          ignore: ['node_modules/**', 'public', 'src/browser']
        }
      }
    },

    // Shell commands to run via Grunt
    shell: {
      // Execute mocha tests
      test: {
        command: 'npm test'
      }
    },

    // Run dev watch tasks (and others potentially) concurrently 
    concurrent: {
      dev: {
        tasks: ['watch', 'nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  // Load third party tasks

  grunt.loadNpmTasks('grunt-purgecss');

  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-postcss')

  grunt.loadNpmTasks('grunt-run');


  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-copy');

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default is running the local development server
  grunt.registerTask('default', ['copy:dev','sass:dev', 'browserify', 'concurrent:dev']);

  // Build production assets
  grunt.registerTask('collect_static', ['init_static', 'sass:dist', 'browserify', 'uglify']);


  // Custom tasks
  grunt.loadTasks('bin/tasks');
};