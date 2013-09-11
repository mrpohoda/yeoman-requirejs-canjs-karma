// Karma configuration
// Generated on Wed Sep 11 2013 08:14:49 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test/test-main.js',
      {pattern: 'app/scripts/*.js', included: false},
      {pattern: 'app/scripts/**/*.js', included: false},
      {pattern: 'app/scripts/**/*.ejs', included: false},
      {pattern: 'app/bower_components/jquery/jquery.js', included: false},
      {pattern: 'app/bower_components/canjs/amd/*.js', included: false},
      {pattern: 'app/bower_components/canjs/amd/**/*.js', included: false},
      {pattern: 'test/lib/**/*.js', included: false},
      {pattern: 'test/spec/**/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      'app/scripts/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // global config of your BrowserStack account
    browserStack: {
      username: 'name@your_domain.com',
      accessKey: 'your_password'
    },

    // define browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '21.0',
        os: 'OS X',
        os_version: 'Mountain Lion'
      },
      bs_iphone5: {
        base: 'BrowserStack',
        device: 'iPhone 5',
        os: 'ios',
        os_version: '6.0'
      }
    },

    browsers: ['bs_firefox_mac', 'bs_iphone5']
  });
};
