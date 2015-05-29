/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	var version = grunt.file.readJSON('package.json').version;

	grunt.config.set('sails-linker', {
		devHomeJs: {
			options: {
				startTag: '<!--SCRIPTS HOME-->',
				endTag: '<!--SCRIPTS HOME END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/home/*.ejs': require('../pipeline').jsFilesToInjectHome
			}
		},

		devHomeJsRelative: {
			options: {
				startTag: '<!--SCRIPTS HOME-->',
				endTag: '<!--SCRIPTS HOME END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/home/*.ejs': require('../pipeline').jsFilesToInjectHome
			}
		},

		prodHomeJs: {
			options: {
				startTag: '<!--SCRIPTS HOME-->',
				endTag: '<!--SCRIPTS HOME END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/home/*.ejs': ['.tmp/public/min/home.' + version + '.production.min.js']
			}
		},

		prodHomeJsRelative: {
			options: {
				startTag: '<!--SCRIPTS HOME-->',
				endTag: '<!--SCRIPTS HOME END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/home/*.ejs': ['.tmp/public/min/home.' + version + '.production.min.js']
			}
		},

		/* APP JS */

		devAppJs: {
			options: {
				startTag: '<!--SCRIPTS APP-->',
				endTag: '<!--SCRIPTS APP END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/app/*.ejs': require('../pipeline').jsFilesToInjectApp
			}
		},

		devAppJsRelative: {
			options: {
				startTag: '<!--SCRIPTS APP-->',
				endTag: '<!--SCRIPTS APP END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/app/*.ejs': require('../pipeline').jsFilesToInjectApp
			}
		},

		prodAppJs: {
			options: {
				startTag: '<!--SCRIPTS APP-->',
				endTag: '<!--SCRIPTS APP END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/app/*.ejs': ['.tmp/public/min/app.' + version + '.production.min.js']
			}
		},

		prodAppJsRelative: {
			options: {
				startTag: '<!--SCRIPTS APP-->',
				endTag: '<!--SCRIPTS APP END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/app/*.ejs': ['.tmp/public/min/app.' + version + '.production.min.js']
			}
		},

		/* TEACHER JS */

		devTeacherJs: {
			options: {
				startTag: '<!--SCRIPTS TEACHER-->',
				endTag: '<!--SCRIPTS TEACHER END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/teacher/*.ejs': require('../pipeline').jsFilesToInjectTeacher
			}
		},

		devTeacherJsRelative: {
			options: {
				startTag: '<!--SCRIPTS TEACHER-->',
				endTag: '<!--SCRIPTS TEACHER END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/teacher/*.ejs': require('../pipeline').jsFilesToInjectTeacher
			}
		},

		prodTeacherJs: {
			options: {
				startTag: '<!--SCRIPTS TEACHER-->',
				endTag: '<!--SCRIPTS TEACHER END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/teacher/*.ejs': ['.tmp/public/min/teacher.' + version + '.production.min.js']
			}
		},

		prodTeacherJsRelative: {
			options: {
				startTag: '<!--SCRIPTS TEACHER-->',
				endTag: '<!--SCRIPTS TEACHER END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/teacher/*.ejs': ['.tmp/public/min/teacher.' + version + '.production.min.js']
			}
		},

		/* PARENTS JS */

		devParentsJs: {
			options: {
				startTag: '<!--SCRIPTS PARENTS-->',
				endTag: '<!--SCRIPTS PARENTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/*.ejs': require('../pipeline').jsFilesToInjectParents
			}
		},

		devParentsJsRelative: {
			options: {
				startTag: '<!--SCRIPTS PARENTS-->',
				endTag: '<!--SCRIPTS PARENTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/*.ejs': require('../pipeline').jsFilesToInjectParents
			}
		},

		prodParentsJs: {
			options: {
				startTag: '<!--SCRIPTS PARENTS-->',
				endTag: '<!--SCRIPTS PARENTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/*.ejs': ['.tmp/public/min/parents.' + version + '.production.min.js']
			}
		},

		prodParentsJsRelative: {
			options: {
				startTag: '<!--SCRIPTS PARENTS-->',
				endTag: '<!--SCRIPTS PARENTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/*.ejs': ['.tmp/public/min/parents.' + version + '.production.min.js']
			}
		},

		/* SCHOOL JS */

		devSchoolJs: {
			options: {
				startTag: '<!--SCRIPTS SCHOOL-->',
				endTag: '<!--SCRIPTS SCHOOL END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/school_admin/*.ejs': require('../pipeline').jsFilesToInjectSchool
			}
		},

		devSchoolJsRelative: {
			options: {
				startTag: '<!--SCRIPTS SCHOOL-->',
				endTag: '<!--SCRIPTS SCHOOL END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/school_admin/*.ejs': require('../pipeline').jsFilesToInjectSchool
			}
		},

		prodSchoolJs: {
			options: {
				startTag: '<!--SCRIPTS SCHOOL-->',
				endTag: '<!--SCRIPTS SCHOOL END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/school_admin/*.ejs': ['.tmp/public/min/school.' + version + '.production.min.js']
			}
		},

		prodSchoolJsRelative: {
			options: {
				startTag: '<!--SCRIPTS SCHOOL-->',
				endTag: '<!--SCRIPTS SCHOOL END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/school_admin/*.ejs': ['.tmp/public/min/school.' + version + '.production.min.js']
			}
		},

		/* ADMIN JS */

		devAdminJs: {
			options: {
				startTag: '<!--SCRIPTS ADMIN-->',
				endTag: '<!--SCRIPTS ADMIN END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/super_admin/*.ejs': require('../pipeline').jsFilesToInjectAdmin
			}
		},

		devAdminJsRelative: {
			options: {
				startTag: '<!--SCRIPTS ADMIN-->',
				endTag: '<!--SCRIPTS ADMIN END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/super_admin/*.ejs': require('../pipeline').jsFilesToInjectAdmin
			}
		},

		prodAdminJs: {
			options: {
				startTag: '<!--SCRIPTS ADMIN-->',
				endTag: '<!--SCRIPTS ADMIN END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/super_admin/*.ejs': ['.tmp/public/min/admin.' + version + '.production.min.js']
			}
		},

		prodAdminJsRelative: {
			options: {
				startTag: '<!--SCRIPTS ADMIN-->',
				endTag: '<!--SCRIPTS ADMIN END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/super_admin/*.ejs': ['.tmp/public/min/admin.' + version + '.production.min.js']
			}
		},

		/* LANDING JS */

		devLandingJs: {
			options: {
				startTag: '<!-- SCRIPTS LANDING-->',
				endTag: '<!-- SCRIPTS LANDING END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/landing/layout.ejs': require('../pipeline').jsFilesToInjectLanding,
				'views/teacher/landing/layout.ejs': require('../pipeline').jsFilesToInjectLanding
			}
		},

		devLandingJsRelative: {
			options: {
				startTag: '<!-- SCRIPTS LANDING-->',
				endTag: '<!-- SCRIPTS LANDING END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/landing/layout.ejs': require('../pipeline').jsFilesToInjectLanding,
				'views/teacher/landing/layout.ejs': require('../pipeline').jsFilesToInjectLanding
			}
		},

		prodLandingJs: {
			options: {
				startTag: '<!-- SCRIPTS LANDING-->',
				endTag: '<!-- SCRIPTS LANDING END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.js'],
				'views/teacher/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.js']
			}
		},

		prodLandingJsRelative: {
			options: {
				startTag: '<!-- SCRIPTS LANDING-->',
				endTag: '<!-- SCRIPTS LANDING END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.js'],
				'views/teacher/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.js']
			}
		},

		/* LICENSE JS */

		devLicenseJs: {
			options: {
				startTag: '<!--SCRIPTS LICENSE-->',
				endTag: '<!--SCRIPTS LICENSE END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/buy_license/*.ejs': require('../pipeline').jsFilesToInjectLicense
			}
		},

		devLicenseJsRelative: {
			options: {
				startTag: '<!--SCRIPTS LICENSE-->',
				endTag: '<!--SCRIPTS LICENSE END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/buy_license/*.ejs': require('../pipeline').jsFilesToInjectLicense
			}
		},

		prodLicenseJs: {
			options: {
				startTag: '<!--SCRIPTS LICENSE-->',
				endTag: '<!--SCRIPTS LICENSE END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'views/buy_license/*.ejs': ['.tmp/public/min/license.' + version + '.production.min.js']
			}
		},

		prodLicenseJsRelative: {
			options: {
				startTag: '<!--SCRIPTS LICENSE-->',
				endTag: '<!--SCRIPTS LICENSE END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/buy_license/*.ejs': ['.tmp/public/min/license.' + version + '.production.min.js']
			}
		},

		/* HOME CSS */

		devHomeStyles: {
			options: {
				startTag: '<!--STYLES HOME-->',
				endTag: '<!--STYLES HOME END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/home/*.ejs': require('../pipeline').cssFilesToInjectHome
			}
		},

		devHomeStylesRelative: {
			options: {
				startTag: '<!--STYLES HOME-->',
				endTag: '<!--STYLES HOME END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/home/*.ejs': require('../pipeline').cssFilesToInjectHome
			}
		},

		prodHomeStyles: {
			options: {
				startTag: '<!--STYLES HOME-->',
				endTag: '<!--STYLES HOME END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/home/*.ejs': ['.tmp/public/min/home.' + version + '.production.min.css']
			}
		},

		prodHomeStylesRelative: {
			options: {
				startTag: '<!--STYLES HOME-->',
				endTag: '<!--STYLES HOME END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/home/*.ejs': ['.tmp/public/min/home.' + version + '.production.min.css']
			}
		},

		/* APP CSS */

		devAppStyles: {
			options: {
				startTag: '<!--STYLES APP-->',
				endTag: '<!--STYLES APP END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/app/*.ejs': require('../pipeline').cssFilesToInjectApp
			}
		},

		devAppStylesRelative: {
			options: {
				startTag: '<!--STYLES APP-->',
				endTag: '<!--STYLES APP END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/app/*.ejs': require('../pipeline').cssFilesToInjectApp
			}
		},

		prodAppStyles: {
			options: {
				startTag: '<!--STYLES APP-->',
				endTag: '<!--STYLES APP END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/app/*.ejs': ['.tmp/public/min/app.' + version + '.production.min.css']
			}
		},

		prodAppStylesRelative: {
			options: {
				startTag: '<!--STYLES APP-->',
				endTag: '<!--STYLES APP END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/app/*.ejs': ['.tmp/public/min/app.' + version + '.production.min.css']
			}
		},

		/* TEACHER CSS */

		devTeacherStyles: {
			options: {
				startTag: '<!--STYLES TEACHER-->',
				endTag: '<!--STYLES TEACHER END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/teacher/*.ejs': require('../pipeline').cssFilesToInjectTeacher
			}
		},

		devTeacherStylesRelative: {
			options: {
				startTag: '<!--STYLES TEACHER-->',
				endTag: '<!--STYLES TEACHER END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/teacher/*.ejs': require('../pipeline').cssFilesToInjectTeacher
			}
		},

		prodTeacherStyles: {
			options: {
				startTag: '<!--STYLES TEACHER-->',
				endTag: '<!--STYLES TEACHER END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/teacher/*.ejs': ['.tmp/public/min/teacher.' + version + '.production.min.css']
			}
		},

		prodTeacherStylesRelative: {
			options: {
				startTag: '<!--STYLES TEACHER-->',
				endTag: '<!--STYLES TEACHER END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/teacher/*.ejs': ['.tmp/public/min/teacher.' + version + '.production.min.css']
			}
		},

		/* PARENTS CSS */

		devParentsStyles: {
			options: {
				startTag: '<!--STYLES PARENTS-->',
				endTag: '<!--STYLES PARENTS END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/parents/*.ejs': require('../pipeline').cssFilesToInjectParents
			}
		},

		devParentsStylesRelative: {
			options: {
				startTag: '<!--STYLES PARENTS-->',
				endTag: '<!--STYLES PARENTS END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/parents/*.ejs': require('../pipeline').cssFilesToInjectParents
			}
		},

		prodParentsStyles: {
			options: {
				startTag: '<!--STYLES PARENTS-->',
				endTag: '<!--STYLES PARENTS END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/*.ejs': ['.tmp/public/min/parents.' + version + '.production.min.css']
			}
		},

		prodParentsStylesRelative: {
			options: {
				startTag: '<!--STYLES PARENTS-->',
				endTag: '<!--STYLES PARENTS END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/*.ejs': ['.tmp/public/min/parents.' + version + '.production.min.css']
			}
		},

		/* SCHOOL CSS */

		devSchoolStyles: {
			options: {
				startTag: '<!--STYLES SCHOOL-->',
				endTag: '<!--STYLES SCHOOL END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/school_admin/*.ejs': require('../pipeline').cssFilesToInjectSchool
			}
		},

		devSchoolStylesRelative: {
			options: {
				startTag: '<!--STYLES SCHOOL-->',
				endTag: '<!--STYLES SCHOOL END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/school_admin/*.ejs': require('../pipeline').cssFilesToInjectSchool
			}
		},

		prodSchoolStyles: {
			options: {
				startTag: '<!--STYLES SCHOOL-->',
				endTag: '<!--STYLES SCHOOL END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/school_admin/*.ejs': ['.tmp/public/min/school.' + version + '.production.min.css']
			}
		},

		prodSchoolStylesRelative: {
			options: {
				startTag: '<!--STYLES SCHOOL-->',
				endTag: '<!--STYLES SCHOOL END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/school_admin/*.ejs': ['.tmp/public/min/school.' + version + '.production.min.css']
			}
		},

		/* ADMIN CSS */

		devAdminStyles: {
			options: {
				startTag: '<!--STYLES ADMIN-->',
				endTag: '<!--STYLES ADMIN END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/super_admin/*.ejs': require('../pipeline').cssFilesToInjectAdmin
			}
		},

		devAdminStylesRelative: {
			options: {
				startTag: '<!--STYLES ADMIN-->',
				endTag: '<!--STYLES ADMIN END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/super_admin/*.ejs': require('../pipeline').cssFilesToInjectAdmin
			}
		},

		prodAdminStyles: {
			options: {
				startTag: '<!--STYLES ADMIN-->',
				endTag: '<!--STYLES ADMIN END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/super_admin/*.ejs': ['.tmp/public/min/admin.' + version + '.production.min.css']
			}
		},

		prodAdminStylesRelative: {
			options: {
				startTag: '<!--STYLES ADMIN-->',
				endTag: '<!--STYLES ADMIN END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/super_admin/*.ejs': ['.tmp/public/min/admin.' + version + '.production.min.css']
			}
		},

		/* LICENSE CSS */

		devLicenseStyles: {
			options: {
				startTag: '<!--STYLES LICENSE-->',
				endTag: '<!--STYLES LICENSE END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/buy_license/*.ejs': require('../pipeline').cssFilesToInjectLicense
			}
		},

		devLicenseStylesRelative: {
			options: {
				startTag: '<!--STYLES LICENSE-->',
				endTag: '<!--STYLES LICENSE END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/buy_license/*.ejs': require('../pipeline').cssFilesToInjectLicense
			}
		},

		prodLicenseStyles: {
			options: {
				startTag: '<!--STYLES LICENSE-->',
				endTag: '<!--STYLES LICENSE END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/buy_license/*.ejs': ['.tmp/public/min/license.' + version + '.production.min.css']
			}
		},

		prodLicenseStylesRelative: {
			options: {
				startTag: '<!--STYLES LICENSE-->',
				endTag: '<!--STYLES LICENSE END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/buy_license/*.ejs': ['.tmp/public/min/license.' + version + '.production.min.css']
			}
		},

		/* LANDING CSS */

		devLandingStyles: {
			options: {
				startTag: '<!-- STYLES LANDING-->',
				endTag: '<!-- STYLES LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/parents/landing/layout.ejs': require('../pipeline').cssFilesToInjectLanding,
				'views/teacher/landing/layout.ejs': require('../pipeline').cssFilesToInjectLanding
			}
		},

		devLandingStylesRelative: {
			options: {
				startTag: '<!-- STYLES LANDING-->',
				endTag: '<!-- STYLES LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/parents/landing/layout.ejs': require('../pipeline').cssFilesToInjectLanding,
				'views/teacher/landing/layout.ejs': require('../pipeline').cssFilesToInjectLanding
			}
		},

		prodLandingStyles: {
			options: {
				startTag: '<!-- STYLES LANDING-->',
				endTag: '<!-- STYLES LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.css'],
				'views/teacher/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.css']
			}
		},

		prodLandingStylesRelative: {
			options: {
				startTag: '<!-- STYLES LANDING-->',
				endTag: '<!-- STYLES LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.css'],
				'views/teacher/landing/layout.ejs': ['.tmp/public/min/landing.' + version + '.production.min.css']
			}
		},

		/* LANDING CUSTOM CSS */

		devLandingCustomStyles: {
			options: {
				startTag: '<!-- CUSTOM LANDING -->',
				endTag: '<!-- CUSTOM LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'views/parents/landing/layout.ejs': require('../pipeline').cssFilesToInjectLandingCustom,
				'views/teacher/landing/layout.ejs': require('../pipeline').cssFilesToInjectLandingCustom
			}
		},

		devLandingCustomStylesRelative: {
			options: {
				startTag: '<!-- CUSTOM LANDING -->',
				endTag: '<!-- CUSTOM LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/parents/landing/layout.ejs': require('../pipeline').cssFilesToInjectLandingCustom,
				'views/teacher/landing/layout.ejs': require('../pipeline').cssFilesToInjectLandingCustom
			}
		},

		prodLandingCustomStyles: {
			options: {
				startTag: '<!-- CUSTOM LANDING -->',
				endTag: '<!-- CUSTOM LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'views/parents/landing/layout.ejs': ['.tmp/public/min/landing.custom.' + version + '.production.min.css'],
				'views/teacher/landing/layout.ejs': ['.tmp/public/min/landing.custom.' + version + '.production.min.css']
			}
		},

		prodLandingCustomStylesRelative: {
			options: {
				startTag: '<!-- CUSTOM LANDING -->',
				endTag: '<!-- CUSTOM LANDING END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/parents/landing/layout.ejs': ['.tmp/public/min/landing.custom.' + version + '.production.min.css'],
				'views/teacher/landing/layout.ejs': ['.tmp/public/min/landing.custom.' + version + '.production.min.css']
			}
		},

		// Bring in JST template object
		devTpl: {
			options: {
				startTag: '<!--TEMPLATES-->',
				endTag: '<!--TEMPLATES END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/jst.js'],
				'views/**/*.html': ['.tmp/public/jst.js'],
				'views/**/*.ejs': ['.tmp/public/jst.js']
			}
		},

		devJsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': require('../pipeline').jsFilesToInjectHome
			}
		},

		devJsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': require('../pipeline').jsFilesToInjectHome
			}
		},

		prodJsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.js']
			}
		},

		prodJsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.js']
			}
		},

		devStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public'
			},

			files: {
				'views/**/*.jade': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/**/*.jade': require('../pipeline').cssFilesToInject
			}
		},

		prodStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.css']
			}
		},

		prodStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.css']
			}
		},

		// Bring in JST template object
		devTplJade: {
			options: {
				startTag: '// TEMPLATES',
				endTag: '// TEMPLATES END',
				fileTmpl: 'script(type="text/javascript", src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/jst.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
