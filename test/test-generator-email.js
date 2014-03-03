/*global describe, beforeEach, it */
"use strict";

var path    = require( "path" );
var helpers = require( "yeoman-generator" ).test;
var assert  = require( "assert" );

describe("email generator", function () {

  beforeEach( function( done ) {
    helpers.testDirectory( path.join( __dirname, "temp" ), function( err ) {
      if ( err ) {
        return done( err );
      }

      this.app = helpers.createGenerator( "email:app", [ "../../app" ] );
      this.app.options[ "skip-install" ] = true;
      done();
    }.bind( this ));
  });

  it( "can be imported without blowing up", function () {
    var app = require( "../app" );
    assert( app !== undefined );
  });

  it( "should store the project name", function( done ) {
    var expected = [
      [ "package.json", /"name": "email"/ ]
    ];

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "css"
    });

    this.app.run({}, function () {
      helpers.assertFileContent( expected );
      done();
    });
  });

  it( "should create expected directories", function( done ) {
    var expected = [
      "src/",
      "src/css",
      "src/images",
      "tmp/",
      "tmp/css",
      "tmp/images",
      "dist"
    ]

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "css"
    });

    this.app.run({}, function () {
      helpers.assertFile( expected );
      done();
    });
  });

  it( "should create expected project files", function( done ) {
    var expected = [
      "package.json",
      ".gitignore",
      "Gruntfile.js"
    ];

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "css"
    });

    this.app.run({}, function () {
      helpers.assertFile( expected );
      done();
    });
  });

  it( "should create expected css files", function( done ) {
    var expected = [ "src/css/core.css" ];

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "css"
    });

    this.app.run({}, function () {
      helpers.assertFile( expected );
      done();
    });
  });

  it( "should create expected Sass (SCSS syntax) files", function( done ) {
    var expected = [ "src/css/core.scss" ];

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "sass",
      syntax: "scss"
    });

    this.app.run({}, function () {
      helpers.assertFile( expected );
      done();
    });
  });

  it( "should create expected Sass (SASS syntax) files", function( done ) {
    var expected = [ "src/css/core.sass" ];

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "sass",
      syntax: "sass"
    });

    this.app.run({}, function () {
      helpers.assertFile( expected );
      done();
    });
  });

  it( "should create expected template files", function( done ) {
    var expected = [ "src/index.html" ];

    helpers.mockPrompt( this.app, {
      projectName: "email",
      stylesheet: "css"
    });

    this.app.run({}, function () {
      helpers.assertFile( expected );
      done();
    });
  });

});
