var allTestFiles = [];
var TEST_REGEXP = /Spec\.js$/;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app/scripts/',
  paths: {
    jquery: '../../app/bower_components/jquery/jquery',
    can:    '../../app/bower_components/canjs/amd/can'
  },
  // example of using shim, to load non AMD libraries (such as Backbone, jquery)
  shim: {

  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kick of jasmine, as it is asynchronous
  callback: window.__karma__.start
});