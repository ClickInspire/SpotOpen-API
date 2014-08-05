/**
 * Validate JavaScript with JSHint
 *
 * ---------------------------------------------------------------
 *
 * Checks for obvious javascript issues.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jshint
 *
 */
module.exports = function(grunt) {

	grunt.config.set('jshint', {
		files: ['api/controllers/*.js',
			'api/models/*.js',
			'api/services/*.js',
			'!api/controllers/AuthController.js',
			'!api/models/Passport.js',
			'!api/services/passport.js'
		],
		options: {
			jshintrc: '.jshintrc'
		}
	});

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
