/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;

	grunt.config.set('cssmin', {
		home: {
			src: ['.tmp/public/concat/home.production.css'],
			dest: '.tmp/public/min/home.' + version + '.production.min.css'
		},

    app: {
      src: ['.tmp/public/concat/app.production.css'],
      dest: '.tmp/public/min/app.' + version + '.production.min.css'
    },

    teacher: {
      src: ['.tmp/public/concat/teacher.production.css'],
      dest: '.tmp/public/min/teacher.' + version + '.production.min.css'
    },

    parents: {
      src: ['.tmp/public/concat/parents.production.css'],
      dest: '.tmp/public/min/parents.' + version + '.production.min.css'
    },

    school: {
      src: ['.tmp/public/concat/school.production.css'],
      dest: '.tmp/public/min/school.' + version + '.production.min.css'
    },

    admin: {
      src: ['.tmp/public/concat/admin.production.css'],
      dest: '.tmp/public/min/admin.' + version + '.production.min.css'
    },

    landing: {
      src: ['.tmp/public/concat/landing.production.css'],
      dest: '.tmp/public/min/landing.' + version + '.production.min.css'
    },

    license: {
      src: ['.tmp/public/concat/license.production.css'],
      dest: '.tmp/public/min/license.' + version + '.production.min.css'
    },

    landing_custom: {
      src: ['.tmp/public/concat/landing.custom.production.css'],
      dest: '.tmp/public/min/landing.custom.' + version + '.production.min.css'
    }
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
