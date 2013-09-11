/*global define */
define(['form/Form'], function (Form) {
    'use strict';

    $('body').prepend('<div id="form"></div>');
    new Form($('#form'), {
		SETTINGS: {
			templatePath: 'scripts/',
			version: '20130911'
		}
    });

    return '\'Allo \'Allo!';
});