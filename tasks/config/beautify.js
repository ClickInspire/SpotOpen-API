/**
 * Format files with BeautifyJS
 *
 * ---------------------------------------------------------------
 *
 * Beautifies server-side javascript.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-jsbeautifier
 *
 */
module.exports = function(grunt) {

	grunt.config.set('jsbeautifier', {
		"format": {
			src: ["<%= jshint.files %>"],
			options: {
				config: '.jsbeautifyrc'
			}
		},
		"check": {
			src: ["<%= jshint.files %>"],
			options: {
				mode: "VERIFY_ONLY",
				config: '.jsbeautifyrc'
			}
		}
	});

  grunt.loadNpmTasks('grunt-jsbeautifier');
};