"use strict"

module.exports = function( grunt ) {

  grunt.initConfig({

    copy: {
      src: {
        files: [
          { expand: true, cwd: "src/css", src: [ "**" ], dest: "tmp/css" },
          { expand: true, cwd: "src/images", src: [ "**" ], dest: "tmp/images" },
          { expand: true, cwd: "src", src: [ "*.html" ], dest: "tmp" }
        ]
      },
      tmp: {
        files: [
          { expand: true, cwd: "tmp", src: [ "*.html" ], dest: "dist" }
        ]
      }
    },

    connect: {
      options: {
        port: "8080",
        useAvailablePort: true,
        livereload: true,
        open: true
      },
      dev: {
        options: {
          base: "tmp/"
        }
      }
    },

    watch: {
      src: {
        files: [ "src/css/**/*.{<%= syntax %>}", "src/images/**/*.{gif,png,jpg,jpeg}", "src/**/*.html" ],
        tasks: [ "build:development" ],
        options: {
          livereload: true
        }
      }
    },

    <% if ( stylesheet === "sass" ) { %>
    sass: {
      compile: {
        files: {
          "tmp/css/core.css": "src/css/core.<%= syntax %>"
        }
      }
    },
    <% } %>

    imagemin: {
      dist: {
        files: [
          { expand: true, cwd: "tmp/images", src: [ "**/*.{png,jpg,jpeg}" ], dest: "dist/images" }
        ]
      }
    },

    uncss: {
      dist: {
        files: {
          "tmp/css/core.css": [ "tmp/index.html" ]
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true
        },
        files: {
          "tmp/index.html": "tmp/index.html"
        }
      }
    },

    premailer: {
      options: {
        removeClasses: true
      },
      dist: {
        files: {
          "tmp/index.html": "tmp/index.html"
        }
      }
    }
  });

  grunt.registerTask( "start", "Compiles the development environment", [
    "build:development",
    "connect:dev",
    "watch:src"
  ]);

  grunt.registerTask( "build:development", "Compiles the development build", [
    "copy:src",
    <% if ( stylesheet === "sass" ) { %>"sass:compile",<% } %>
    "copy:tmp"
  ]);

  grunt.registerTask( "build:distribution", "Compiles the distribution build", [
    "copy:src",
    <% if ( stylesheet === "sass" ) { %>"sass:compile",<% } %>
    "uncss:dist",
    "htmlmin:dist",
    "premailer:dist",
    "imagemin:dist",
    "copy:tmp"
  ]);


  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-contrib-connect" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-imagemin" );
  grunt.loadNpmTasks( "grunt-uncss" );
  grunt.loadNpmTasks( "grunt-contrib-htmlmin" );
  grunt.loadNpmTasks( "grunt-premailer" );
  <% if ( stylesheet === "sass" ) { %>
    grunt.loadNpmTasks( "grunt-sass" );
  <% } %>

};
