// Karma configuration
// Generated on 2016-05-09

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      '../js/vendor/vue/vue.min.js',
      '../js/vendor/vue/vue-resource.min.js',
      '../js/vendor/jquery/jquery35d0.js',
      '../js/vendor/jquery/jquery-migrate.min6f3e.js',
      '../js/vendor/jquery.fitvidsec94.js',
      '../js/vendor/fitvids-doc-readyec94.js',
      '../js/vendor/jQueryRotate.minec94.js',
      '../js/vendor/baseec94.js',
      '../js/vendor/emoji.js',
      '../js/vendor/navigation11a8.js',
      '../js/vendor/skip-link-focus-fix08e0.js',
      '../js/vendor/wp-embed.minec94.js',
      '../js/helpers/location.js',
      '../js/controllers/index.js',
      '../js/controllers/post.js',
      '**/*_spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
