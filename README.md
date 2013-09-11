Yeoman + RequireJS + CanJS + Karma
==================================

Skeleton for single page application (SPA) written using [CanJS](http://canjs.com/) as a javascript framework, [RequireJS](http://requirejs.org/) as a module loader, [Yeoman](http://yeoman.io/) as a development workflow and [Karma](http://karma-runner.github.io/0.10/index.html) as a test runner using Jasmine BDD framework. Karma does not only run tests on local browsers, it can also run them on [Browserstack](http://www.browserstack.com).

## Create skeleton app
`yo webapp` - when asked, choose **RequireJS**

This creates a simple web application. It uses [Bower](https://github.com/bower/bower) as a package manager.

Run `grunt server` to run the app and ses how it looks.

### Add CanJS

Edit `bower.json` file and add `"canjs": "~1.1.7"` as a dependency. Run ``bower install`` which installs CanJS (with AMD support) into `app/bower_components/canjs`.

Edit `app/main.js` file and add `can: '../bower_components/canjs/amd/can'` to paths section. CanJS can be now loaded using RequireJS in any module.

Create some module using CanJS or take a look at my `app/scripts/form` example.

## Test application using Karma
Create file `test/test-main.js` based on example in this repository.

Create file `test/spec/formSpec.js` based on example in this repository.

[Install Karma](http://karma-runner.github.io/0.10/intro/installation.html) - it can be installed globally using `npm install -g karma`.

Run `karma init`

 - choose jasmine
 - choose RequireJS
 - choose any browser (i.e. Chrome)
 - include these paths
    - app/scripts/*.js
    - app/scripts/\*\*/*.js
    - app/scripts/\*\*/*.ejs
    - app/bower_components/jquery/jquery.js
    - app/bower_components/canjs/amd/*.js
    - app/bower_components/canjs/amd/\*\*/*.js
    - test/lib/\*\*/*.js
    - test/spec/\*\*/*.js
 - exclude `app/scripts/main.js`
 - include `test/test-main.js` in head script
 - watch all files on changes

Run `karma start` and see 2 tests passing.

## Use Browserstack to run test on any browser

Install [karma-browserstack-launcher](https://npmjs.org/package/karma-browserstack-launcher)

Add this to `config.set` section of `karma.conf.js` file. This section is commented in this repository, so you can just uncomment it.

```js
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
```

Run `karma start` and see the local tunnel being created on Browserstack. 2 tests passing on every defined browser.