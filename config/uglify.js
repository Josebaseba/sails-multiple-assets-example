/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;

	grunt.config.set('uglify', {
		home: {
			src: ['.tmp/public/concat/home.production.js'],
			dest: '.tmp/public/min/home.' + version + '.production.min.js'
		},

    app: {
      src: ['.tmp/public/concat/app.production.js'],
      dest: '.tmp/public/min/app.' + version + '.production.min.js'
    },

    teacher: {
      src: ['.tmp/public/concat/teacher.production.js'],
      dest: '.tmp/public/min/teacher.' + version + '.production.min.js'
    },

    parents: {
      src: ['.tmp/public/concat/parents.production.js'],
      dest: '.tmp/public/min/parents.' + version + '.production.min.js'
    },

    school: {
      src: ['.tmp/public/concat/school.production.js'],
      dest: '.tmp/public/min/school.' + version + '.production.min.js'
    },

    admin: {
      src: ['.tmp/public/concat/admin.production.js'],
      dest: '.tmp/public/min/admin.' + version + '.production.min.js'
    },

    license: {
      src: ['.tmp/public/concat/license.production.js'],
      dest: '.tmp/public/min/license.' + version + '.production.min.js'
    },

    landing: {
      src: ['.tmp/public/concat/landing.production.js'],
      dest: '.tmp/public/min/landing.' + version + '.production.min.js'
    }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
