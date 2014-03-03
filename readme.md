# Email generator [![Build Status](https://travis-ci.org/jasonbellamy/generator-email.png?branch=master)](https://travis-ci.org/jasonbellamy/generator-email)

> [Yeoman](http:/yeoman.io) generator to help ease the development of HTML emails.


## Features
The Email generator eases the process of HTML email development by providing you with:

- a local development server with [LiveReload](http://livereload.com) functionality.
- a boilerplate HTML template to get you started.
- the ability to develop with external CSS or [Sass](http://sass-lang.com) (SASS/SCSS) stylesheets.
- automatic inlining of the external CSS styles in your template.
- automatic compression & optimization of all your image assets.
- optimized CSS & HTML by removing unused comments and selectors from your code.


## Getting Started
You'll need to make sure you've downloaded & installed the generator and all of its dependencies. You can do this by running the following commands:

1. `npm install -g yo` - Installs [Yeoman](http://yeoman.io).
2. `npm install -g generator-email` - Install the [Email generator](https://github.com/jasonbellamy/generator-email).
3. `gem install premailer` - Installs [Premailer](https://github.com/premailer/premailer/).


## Usage
To generate the email development environment, type: `yo email` and answer the questions asked by the generator.

---

The following tasks will now be made available to you via [Grunt](http://gruntjs.com) to help you develop and distribute your HTML emails.

- `grunt start` - Starts a web server, opens the browser, and refreshes the page when changes occur.
- `grunt development` - manually compiles the development build.
- `grunt distribution`  - manually compiles the distribution build.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2014 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
