/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		//Concat JS FILES
		js_home: {
			src: require('../pipeline').jsFilesToInjectHome,
			dest: '.tmp/public/concat/home.production.js'
		},
		js_app: {
			src: require('../pipeline').jsFilesToInjectApp,
			dest: '.tmp/public/concat/app.production.js'
		},
		js_teacher: {
			src: require('../pipeline').jsFilesToInjectTeacher,
			dest: '.tmp/public/concat/teacher.production.js'
		},
		js_parents: {
			src: require('../pipeline').jsFilesToInjectParents,
			dest: '.tmp/public/concat/parents.production.js'
		},
		js_school: {
			src: require('../pipeline').jsFilesToInjectSchool,
			dest: '.tmp/public/concat/school.production.js'
		},
		js_admin: {
			src: require('../pipeline').jsFilesToInjectAdmin,
			dest: '.tmp/public/concat/admin.production.js'
		},
		js_landing: {
			src: require('../pipeline').jsFilesToInjectLanding,
			dest: '.tmp/public/concat/landing.production.js'
		},
		js_license: {
			src: require('../pipeline').jsFilesToInjectLicense,
			dest: '.tmp/public/concat/license.production.js'
		},

		//Concat CSS FILES
		css_home: {
			src: require('../pipeline').cssFilesToInjectHome,
			dest: '.tmp/public/concat/home.production.css'
		},
		css_app: {
			src: require('../pipeline').cssFilesToInjectApp,
			dest: '.tmp/public/concat/app.production.css'
		},
		css_teacher: {
			src: require('../pipeline').cssFilesToInjectTeacher,
			dest: '.tmp/public/concat/teacher.production.css'
		},
		css_parents: {
			src: require('../pipeline').cssFilesToInjectParents,
			dest: '.tmp/public/concat/parents.production.css'
		},
		css_school: {
			src: require('../pipeline').cssFilesToInjectSchool,
			dest: '.tmp/public/concat/school.production.css'
		},
		css_admin: {
			src: require('../pipeline').cssFilesToInjectAdmin,
			dest: '.tmp/public/concat/admin.production.css'
		},
		css_landing: {
			src: require('../pipeline').cssFilesToInjectLanding,
			dest: '.tmp/public/concat/landing.production.css'
		},
		css_license: {
			src: require('../pipeline').cssFilesToInjectLicense,
			dest: '.tmp/public/concat/license.production.css'
		},
		css_landing_custom: {
			src: require('../pipeline').cssFilesToInjectLandingCustom,
			dest: '.tmp/public/concat/landing.custom.production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
