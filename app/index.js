"use strict";

var util   = require( "util" );
var path   = require( "path" );
var yeoman = require( "yeoman-generator" );


var EmailGenerator = yeoman.generators.Base.extend({

  init: function () {
    this.on( "end", function () {
      if ( !this.options[ "skip-install" ] ) {
        this.npmInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    var prompts = [
      {
        name: "projectName",
        message: "What's the name of this email template?",
        type: "input",
        default: path.basename( process.cwd() )
      },
      {
        name: "stylesheet",
        message: "Would you like to use CSS or Sass?",
        type: "list",
        choices: [
          { name: "CSS", value: "css" },
          { name: "Sass", value: "sass" }
        ],
        default: "css"
      },
      {
        when: function( props ) {
          return props.stylesheet === "sass";
        },
        name: "syntax",
        message: "Which Sass syntax would you like to use?",
        type: "list",
        choices: [
          { name: "SCSS", value: "scss" },
          { name: "SASS", value: "sass" }
        ],
        default: "scss"
      }
    ];

    this.prompt( prompts, function( props ) {
      this.projectName = props.projectName;
      this.stylesheet  = props.stylesheet;
      this.syntax      = props.syntax || this.stylesheet;
      done();
    }.bind( this ));
  },

  directories: function () {
    [ "src", "tmp" ].forEach( function( directory ) {
      this.mkdir( directory );
      this.mkdir( directory + "/css" );
      this.mkdir( directory + "/images" );
    }, this );
    this.mkdir( "dist" );
  },

  project: function () {
    this.template( "_Gruntfile.js", "Gruntfile.js" );
    this.template( "_package.json", "package.json" );
    this.copy( "gitignore", ".gitignore" );
  },

  stylesheets: function () {
    if ( this.stylesheet === "css" ) {
      this.directory( "stylesheets/" + this.stylesheet, "src/css" );
    }

    if ( this.stylesheet === "sass" ) {
      this.directory( "stylesheets/" + this.stylesheet + "/" + this.syntax, "src/css" );
    }
  },

  templates: function () {
    this.template( "templates/index.html", "src/index.html" );
  }
});

module.exports = EmailGenerator;
