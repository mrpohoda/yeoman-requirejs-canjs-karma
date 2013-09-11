/* global define */

/**
 * Form module is a control, which takes care about handling filtering form.
 */
define([
	'jquery',
	'can'
], function($, can) {
	'use strict';
	return can.Control({

		defaults: {}
	}, {
		init: function() {
			this.element.html(can.view(this.options.SETTINGS.templatePath +
				'form/views/init.ejs?v=' + this.options.SETTINGS.version, {
					name: 'Test name'
				}
			));

			return true;
		}
	});
});